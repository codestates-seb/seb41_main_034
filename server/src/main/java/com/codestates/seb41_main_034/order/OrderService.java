package com.codestates.seb41_main_034.order;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.PaginatedResponseDto;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;
import com.codestates.seb41_main_034.order.dto.*;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.order.entity.OrderProduct;
import com.codestates.seb41_main_034.order.entity.OrderProduct.OrderProductStatus;
import com.codestates.seb41_main_034.product.ProductService;
import com.codestates.seb41_main_034.product.dto.ProductResponseDto;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.*;
import java.util.function.Function;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    private final ProductService productService;

    public OrderResponseDto createOrder(OrderPostDto postDto) {
        // 입력 받은 상품 ID가 유효하고 주문 가능한지 확인 및 상품 정보 조회
        Set<Integer> productIds = postDto.getProducts().stream()
                .map(OrderProductPostDto::getProductId).collect(Collectors.toSet());
        Map<Integer, ProductResponseDto> productDtoMap = productService.getVerifiedProducts(productIds)
                .stream()
                .peek(productDto -> {
                    switch (productDto.getStatus()) {
                        case UNAVAILABLE:
                            throw new BusinessLogicException(ExceptionCode.ORDER_PRODUCT_IS_UNAVAILABLE);
                        case DRAFT:
                            throw new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND);
                    }
                })
                .collect(Collectors.toMap(ProductResponseDto::getId, Function.identity()));

        // Order 생성
        Order order = new Order();

        // OrderProduct 생성
        // DTO에 중복된 상품 ID가 있는 경우 수량을 합쳐서 하나의 OrderProduct 엔티티로 처리
        Map<Integer, OrderProduct> orderProductMap = new HashMap<>();
        for (OrderProductPostDto dto : postDto.getProducts()) {
            int productId = dto.getProductId();

            // 상품 주문 가격과 상품 가격이 불일치하는 경우 예외 발생
            if (dto.getPrice() != productDtoMap.get(productId).getPrice()) {
                throw new BusinessLogicException(ExceptionCode.ORDER_MISMATCHED_PRICE);
            }

            orderProductMap.compute(
                    productId,
                    (k, v) -> {
                        if (v == null) {
                            return new OrderProduct(order, productId, dto.getPrice(), dto.getQuantity());
                        }

                        v.setQuantity(v.getQuantity() + dto.getQuantity());

                        return v;
                    }
            );
        }
        order.setOrderProducts(new ArrayList<>(orderProductMap.values()));

        // 주소 입력
        Address address = new Address(
                postDto.getRecipient(),
                postDto.getZonecode(),
                postDto.getAddress(),
                postDto.getDetailAddress(),
                postDto.getPhone()
        );
        order.setAddress(address);

        // DB에 저장
        Order createdOrder = orderRepository.save(order);

        // 주문한 만큼 재고 감소
        for (OrderProduct orderProduct : createdOrder.getOrderProducts()) {
            productService.updateProductStock(orderProduct.getProductId(), -orderProduct.getQuantity());
        }

        // 결제 완료 처리, DB에 반영
        // TODO: 결제 정보를 확인한 후에 결제 완료로 변경하도록 수정해야한다.
        //       EventListener 등을 사용하여 비동기적으로 해결할 수도 있고 아니면 지금처럼 결제 완료가 되고 난 후 주문이 생성되게 할 수도 있다.
        for (OrderProduct orderProduct : createdOrder.getOrderProducts()) {
            orderProduct.setStatus(OrderProductStatus.PAYMENT_FINISHED);
        }
        orderRepository.flush();

        // 응답 DTO로 매핑 후 반환
        return orderToDto(createdOrder, productDtoMap);
    }

    @Transactional(readOnly = true)
    public OrderResponseDto readOrder(long orderId) {
        // DB에서 주문 조회, 없는 경우 예외 발생
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 주문한 상품 정보 조회
        Set<Integer> productIds = order.getOrderProducts().stream()
                .map(OrderProduct::getProductId).collect(Collectors.toSet());
        Map<Integer, ProductResponseDto> productDtoMap = productService.getVerifiedProducts(productIds)
                .stream()
                .collect(Collectors.toMap(ProductResponseDto::getId, Function.identity()));

        // 응답 DTO로 매핑 후 반환
        return orderToDto(order, productDtoMap);
    }

    @Transactional(readOnly = true)
    public PaginatedResponseDto<OrderResponseDto> readOrders(LocalDate from,
                                                             LocalDate to,
                                                             Pageable pageable) {
        // TODO: 인증된 회원의 ID를 가져와야 한다.
        int createdBy = 1;

        // from, to 기본값 설정
        from = Optional.ofNullable(from).orElse(LocalDate.of(2023, 1, 1));
        to = Optional.ofNullable(to).orElse(LocalDate.now());

        // 페이지네이션 적용된 주문 ID 조회
        Page<Long> orderIdPage = orderRepository.findIdByCreatedByAndDateBetween(createdBy, from, to, pageable);

        // 주문 ID Page를 사용하여 fetch join된 주문 목록 조회
        List<Order> orders = orderRepository.findAllById(orderIdPage.getContent(), pageable.getSort());

        // 주문 목록에 있는 상품을 한 번에 조회
        Set<Integer> productIds = orders.stream().flatMap(order -> order.getOrderProducts().stream())
                .map(OrderProduct::getProductId).collect(Collectors.toSet());
        Map<Integer, ProductResponseDto> productDtoMap = productService.getVerifiedProducts(productIds)
                .stream()
                .collect(Collectors.toMap(ProductResponseDto::getId, Function.identity()));

        // 페이지네이션 응답 DTO로 반환
        List<OrderResponseDto> orderDtos =
                orders.stream().map(order -> orderToDto(order, productDtoMap)).collect(Collectors.toList());

        return new PaginatedResponseDto<>(
                orderDtos,
                orderIdPage.getNumber(),
                orderIdPage.getSize(),
                orderIdPage.getTotalPages(),
                orderIdPage.getTotalElements()
        );
    }

    public OrderAddressResponseDto updateOrderAddress(long orderId, OrderAddressPatchDto addressPatchDto) {
        // DB에서 주문 조회, 없는 경우 예외 발생
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 배송 진행중인 상품이 없고 결제 대기중, 결제 완료 상태인 상품만 있을 때 주소 수정 가능
        order.getOrderProducts()
                .stream()
                .map(OrderProduct::getStatus)
                .distinct()
                .peek(status -> {
                    if (status == OrderProductStatus.PREPARING_FOR_SHIPMENT
                            || status == OrderProductStatus.SHIPPED
                            || status == OrderProductStatus.DELIVERED) {
                        throw new BusinessLogicException(ExceptionCode.ORDER_CANNOT_UPDATE_ADDRESS);
                    }
                })
                .forEach(status -> {
                    if (status != OrderProductStatus.WAITING_FOR_PAYMENT
                            && status != OrderProductStatus.PAYMENT_FINISHED) {
                        throw new BusinessLogicException(ExceptionCode.ORDER_CANNOT_UPDATE_ADDRESS);
                    }
                });

        // DTO에 입력된 값으로 주소 수정
        Address address = order.getAddress();
        Optional.ofNullable(addressPatchDto.getRecipient()).ifPresent(address::setRecipient);
        Optional.ofNullable(addressPatchDto.getZonecode()).ifPresent(address::setZonecode);
        Optional.ofNullable(addressPatchDto.getAddress()).ifPresent(address::setAddress);
        Optional.ofNullable(addressPatchDto.getDetailAddress()).ifPresent(address::setDetailAddress);
        Optional.ofNullable(addressPatchDto.getPhone()).ifPresent(address::setPhone);

        // 수정된 부분을 DB에 저장한다.
        orderRepository.flush();

        // 응답 DTO로 매핑 후 반환
        return new OrderAddressResponseDto(
                order.getId(),
                address.getRecipient(),
                address.getZonecode(),
                address.getAddress(),
                address.getDetailAddress(),
                address.getPhone(),
                order.getCreatedBy(),
                order.getModifiedBy(),
                order.getCreatedAt(),
                order.getModifiedAt()
        );
    }

    public OrderResponseDto updateOrderCancel(long orderId, OrderCancelDto cancelDto) {
        // DB에서 주문 조회, 없는 경우 예외 발생
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 주문한 상품 ID Set 생성
        Set<Integer> productIds = order.getOrderProducts().stream()
                .map(OrderProduct::getProductId).collect(Collectors.toSet());

        // DTO를 Map<productId, quantity>로 만든다. DTO에 중복된 ID가 있는 경우 quantity를 더한다.
        Map<Integer, Integer> cancelMap = cancelDto.getProducts().stream().collect(Collectors.toMap(
                OrderProductCancelDto::getProductId, OrderProductCancelDto::getQuantity, Integer::sum));

        // 취소 가능한 OrderProduct만 분리
        // 결제 대기, 결제 완료, 배송 준비 중일 때에만 취소 가능
        List<OrderProduct> cancelableOrderProducts = order.getOrderProducts()
                .stream()
                .filter(orderProduct -> {
                    OrderProductStatus status = orderProduct.getStatus();

                    return status == OrderProductStatus.WAITING_FOR_PAYMENT
                            || status == OrderProductStatus.PAYMENT_FINISHED
                            || status == OrderProductStatus.PREPARING_FOR_SHIPMENT;
                })
                .collect(Collectors.toList());

        // 취소 완료된 수량 집계, 상품 재고를 수정하는 데에 사용
        Map<Integer, Integer> productIdDeltaMap = new HashMap<>();

        // 취소 처리 진행
        cancelMap.forEach((productId, quantity) -> {
            // 상품 ID에 해당하는 OrderProduct만 분리
            List<OrderProduct> orderProducts = cancelableOrderProducts.stream()
                    .filter(orderProduct -> orderProduct.getProductId() == productId)
                    .collect(Collectors.toList());

            // 취소 가능한 수량보다 취소 요청 수량이 큰 경우 예외 발생
            int cancelableQuantity = orderProducts.stream()
                    .mapToInt(OrderProduct::getQuantity)
                    .sum();
            if (cancelableQuantity < quantity) {
                throw new BusinessLogicException(ExceptionCode.ORDER_CANNOT_CANCEL);
            }

            // OrderProduct를 하나씩 취소 처리
            for (OrderProduct orderProduct : orderProducts) {
                OrderProductStatus status = orderProduct.getStatus();

                // 결제 대기 중, 결제 완료인 경우 바로 취소 완료 처리
                if (status == OrderProductStatus.WAITING_FOR_PAYMENT
                        || status == OrderProductStatus.PAYMENT_FINISHED) {
                    // 취소 요청 수량보다 OrderProduct의 구매 수량이 적거나 같으면 전체를 취소한다.
                    if (orderProduct.getQuantity() <= quantity) {
                        orderProduct.setStatus(OrderProductStatus.CANCELED);
                        quantity -= orderProduct.getQuantity();
                        productIdDeltaMap.merge(productId, orderProduct.getQuantity(), Integer::sum);
                        // 취소 요청 수량보다 OrderProduct의 구매 수량이 많으면 취소 요청 수량만큼 구매 수량을 줄인다.
                        // 취소된 수량 만큼 새로운 OrderProduct를 만들어서 기록해준다.
                    } else {
                        orderProduct.setQuantity(orderProduct.getQuantity() - quantity);
                        OrderProduct canceledOrderProduct =
                                new OrderProduct(order, productId, orderProduct.getPrice(), quantity);
                        canceledOrderProduct.setStatus(OrderProductStatus.CANCELED);
                        order.getOrderProducts().add(canceledOrderProduct);
                        productIdDeltaMap.merge(productId, quantity, Integer::sum);
                        quantity = 0;
                    }
                } else { // 배송 준비 중인 경우 취소 대기 처리
                    // 취소 요청 수량보다 OrderProduct의 구매 수량이 적거나 같으면 전체를 취소 대기 처리한다.
                    if (orderProduct.getQuantity() <= quantity) {
                        orderProduct.setStatus(OrderProductStatus.WAITING_FOR_CANCELLATION);
                        quantity -= orderProduct.getQuantity();
                        // 취소 요청 수량보다 OrderProduct의 구매 수량이 많으면 취소 요청 수량만큼 구매 수량을 줄인다.
                        // 취소 대기 수량 만큼 새로운 OrderProduct를 만들어서 기록해준다.
                    } else {
                        orderProduct.setQuantity(orderProduct.getQuantity() - quantity);
                        OrderProduct canceledOrderProduct =
                                new OrderProduct(order, productId, orderProduct.getPrice(), quantity);
                        canceledOrderProduct.setStatus(OrderProductStatus.WAITING_FOR_CANCELLATION);
                        order.getOrderProducts().add(canceledOrderProduct);
                        quantity = 0;
                    }
                }

                // 취소 요청 수량이 더 이상 없으면 종료한다.
                if (quantity == 0) {
                    break;
                }
            }
        });

        // 취소 완료된 만큼 재고 증가
        productIdDeltaMap.forEach(productService::updateProductStock);

        // DB에 주문 수정 사항 저장
        orderRepository.flush();

        // 상품 정보 조회
        Map<Integer, ProductResponseDto> productDtoMap = productService.getVerifiedProducts(productIds).stream()
                .collect(Collectors.toMap(ProductResponseDto::getId, Function.identity()));

        // 응답 DTO로 매핑 후 반환
        return orderToDto(order, productDtoMap);
    }

    public OrderResponseDto updateOrderPrepare(long orderId) {
        // DB에서 주문 조회, 없는 경우 예외 발생
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 결제 완료된 OrderProduct List 생성
        List<OrderProduct> orderProducts = order.getOrderProducts().stream()
                .filter(orderProduct -> orderProduct.getStatus() == OrderProductStatus.PAYMENT_FINISHED)
                .collect(Collectors.toList());

        // 배송 준비할 상품이 없는 경우 예외 발생
        if (orderProducts.isEmpty()) {
            throw new BusinessLogicException(ExceptionCode.ORDER_NO_PRODUCTS_TO_PREPARE);
        }

        // 결제 완료된 주문에 대해서 배송 준비 중으로 변경
        for (OrderProduct orderProduct : orderProducts) {
            orderProduct.setStatus(OrderProductStatus.PREPARING_FOR_SHIPMENT);
        }

        // DB에 주문 수정 사항 저장
        orderRepository.flush();

        // DTO에 매핑 후 반환
        return orderToDto(order, null);
    }

    public OrderResponseDto updateOrderShip(long orderId) {
        // DB에서 주문 조회, 없는 경우 예외 발생
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 배송 준비, 취소 대기 상태인 OrderProduct List 생성
        List<OrderProduct> orderProducts = order.getOrderProducts().stream()
                .filter(orderProduct -> orderProduct.getStatus() == OrderProductStatus.PREPARING_FOR_SHIPMENT
                        || orderProduct.getStatus() == OrderProductStatus.WAITING_FOR_CANCELLATION)
                .collect(Collectors.toList());

        // 배송할 상품이 없는 경우 예외 발생
        if (orderProducts.isEmpty()) {
            throw new BusinessLogicException(ExceptionCode.ORDER_NO_PRODUCTS_TO_SHIP);
        }

        // 배송 준비, 취소 대기 상태인 상품 ID Set 생성
        Set<Integer> productIds = orderProducts.stream().map(OrderProduct::getProductId).collect(Collectors.toSet());

        // 상품 ID마다 하나의 OrderProduct로 수량을 합치고 배송 중으로 변경
        for (int productId : productIds) {
            // 상품 ID로 OrderProduct 필터
            List<OrderProduct> orderProductsByProductId = orderProducts.stream()
                    .filter(orderProduct -> orderProduct.getProductId() == productId)
                    .collect(Collectors.toList());

            // 총 배송 수량 집계
            int quantity = orderProductsByProductId.stream().mapToInt(OrderProduct::getQuantity).sum();

            // 하나의 OrderProduct의 수량을 총 배송 수량으로 바꾸고 배송 중 상태로 변경
            OrderProduct orderProduct = orderProductsByProductId.get(0);
            orderProduct.setQuantity(quantity);
            orderProduct.setStatus(OrderProductStatus.SHIPPED);

            // 나머지 OrderProduct는 삭제 처리 (soft delete)
            for (int i = 1; i < orderProductsByProductId.size(); i++) {
                orderProductsByProductId.get(i).setDeleted(true);
            }
        }

        // DB에 주문 수정 사항 저장
        orderRepository.flush();

        // 삭제 처리된 OrderProduct 정리
        order.setOrderProducts(order.getOrderProducts().stream()
                .filter(orderProduct -> !orderProduct.isDeleted()).collect(Collectors.toList()));

        // DTO에 매핑 후 반환
        return orderToDto(order, null);
    }

    public OrderResponseDto updateOrderConfirmCancellation(long orderId) {
        // DB에서 주문 조회, 없는 경우 예외 발생
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 취소 대기 중인 OrderProduct List 생성
        List<OrderProduct> orderProducts = order.getOrderProducts().stream()
                .filter(orderProduct -> orderProduct.getStatus() == OrderProductStatus.WAITING_FOR_CANCELLATION)
                .collect(Collectors.toList());

        // 취소 완료할 상품이 없는 경우 예외 발생
        if (orderProducts.isEmpty()) {
            throw new BusinessLogicException(ExceptionCode.ORDER_NO_PRODUCTS_TO_CONFIRM_CANCELLATION);
        }

        // 취소 완료된 수량 집계, 상품 재고를 수정하는 데에 사용
        Map<Integer, Integer> productIdDeltaMap = new HashMap<>();

        // 취소 대기 중인 상품을 취소 완료로 변경
        for (OrderProduct orderProduct : orderProducts) {
            productIdDeltaMap.merge(orderProduct.getProductId(), orderProduct.getQuantity(), Integer::sum);
            orderProduct.setStatus(OrderProductStatus.CANCELED);
        }

        // 취소 완료된 만큼 재고 증가
        productIdDeltaMap.forEach(productService::updateProductStock);

        // DB에 주문 수정 사항 저장
        orderRepository.flush();

        // DTO에 매핑 후 반환
        return orderToDto(order, null);
    }

    @Transactional(readOnly = true)
    private OrderResponseDto orderToDto(Order order, Map<Integer, ProductResponseDto> productDtoMap) {
        Address address = order.getAddress();

        List<OrderProductResponseDto> orderProducts = order.getOrderProducts().stream()
                .map(orderProduct -> {
                    Optional<ProductResponseDto> productDto = Optional.ofNullable(productDtoMap)
                            .map(map -> map.get(orderProduct.getProductId()));
                    String name = productDto.map(ProductResponseDto::getName).orElse(null);
                    String imageUrl = productDto.map(ProductResponseDto::getImageUrls)
                            .map(urls -> urls.isEmpty() ? null : urls.get(0)).orElse(null);

                    return new OrderProductResponseDto(
                            orderProduct.getProductId(),
                            name,
                            imageUrl,
                            orderProduct.getPrice(),
                            orderProduct.getQuantity(),
                            orderProduct.getStatus(),
                            orderProduct.getCreatedBy(),
                            orderProduct.getModifiedBy(),
                            orderProduct.getCreatedAt(),
                            orderProduct.getModifiedAt()
                    );
                }).collect(Collectors.toList());

        return new OrderResponseDto(
                order.getId(),
                orderProducts,
                address.getRecipient(),
                address.getZonecode(),
                address.getAddress(),
                address.getDetailAddress(),
                address.getPhone(),
                order.getCreatedBy(),
                order.getModifiedBy(),
                order.getCreatedAt(),
                order.getModifiedAt()
        );
    }

    // TODO: 주문 조회, 수정 시 인증된 회원에게만 인가되어야 하는데 그 부분을 처리해줄 메서드 필요

}
