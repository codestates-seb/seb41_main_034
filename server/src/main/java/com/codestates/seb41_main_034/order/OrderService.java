package com.codestates.seb41_main_034.order;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.PaginatedResponseDto;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;
import com.codestates.seb41_main_034.order.dto.*;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.order.entity.OrderProduct;
import com.codestates.seb41_main_034.order.entity.OrderProduct.OrderProductStatus;
import com.codestates.seb41_main_034.product.Product;
import com.codestates.seb41_main_034.product.ProductService;
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

    private final OrderMapper mapper;

    private final ProductService productService;

    public OrderResponseDto createOrder(OrderPostDto postDto) {
        // 입력 받은 제품 ID가 유효한지 확인 및 제품 정보 조회
        List<Integer> productIds = postDto.getProducts()
                .stream()
                .map(OrderProductPostDto::getProductId)
                .collect(Collectors.toList());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds)
                .stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // Order 생성
        Order order = new Order();

        // OrderProduct 생성
        // DTO에 중복된 제품 ID가 있는 경우 수량을 합쳐서 하나의 OrderProduct 엔티티로 처리
        Map<Integer, OrderProduct> orderProductMap = new HashMap<>();
        for (OrderProductPostDto dto : postDto.getProducts()) {
            int productId = dto.getProductId();

            // 상품 주문 가격과 상품 가격이 불일치하는 경우 예외 발생
            if (dto.getPrice() != productMap.get(productId).getPrice()) {
                throw new BusinessLogicException(ExceptionCode.MISMATCHED_PRICE);
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
        Map<Integer, Integer> idDeltaMap = createdOrder.getOrderProducts()
                .stream()
                .collect(Collectors.toMap(OrderProduct::getProductId, orderProduct -> -orderProduct.getQuantity()));
        productService.updateProductsStock(idDeltaMap);

        // 응답 DTO로 매핑 후 반환
        return mapper.orderToResponseDto(createdOrder, productMap);
    }

    @Transactional(readOnly = true)
    public OrderResponseDto readOrder(long id) {
        // DB에서 주문 조회, 없는 경우 예외 발생
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 주문한 제품 정보 조회
        List<Integer> productIds = order.getOrderProducts()
                .stream()
                .map(OrderProduct::getProductId)
                .collect(Collectors.toList());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds)
                .stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // 응답 DTO로 매핑 후 반환
        return mapper.orderToResponseDto(order, productMap);
    }

    @Transactional(readOnly = true)
    public PaginatedResponseDto<OrderResponseDto> readOrders(int createdBy,
                                                             LocalDate from,
                                                             LocalDate to,
                                                             Pageable pageable) {
        // from, to 기본값 설정
        from = Optional.ofNullable(from).orElse(LocalDate.of(2023, 1, 1));
        to = Optional.ofNullable(to).orElse(LocalDate.now());

        // 페이지네이션 적용된 주문 ID 조회
        Page<Long> orderIdPage = orderRepository.findIdByCreatedByAndYear(createdBy, from, to, pageable);

        // 주문 ID Page를 사용하여 fetch join된 주문 목록 조회
        List<Order> orders = orderRepository.findAllById(orderIdPage.getContent(), pageable.getSort());

        // 주문 목록에 있는 제품을 한 번에 조회
        List<Integer> productIds = orders.stream()
                .flatMap(order -> order.getOrderProducts().stream())
                .map(OrderProduct::getProductId)
                .collect(Collectors.toList());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds)
                .stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // DTO로 매핑
        List<OrderResponseDto> orderResponseDtos =
                orders.stream()
                        .map(order -> mapper.orderToResponseDto(order, productMap))
                        .collect(Collectors.toList());

        // 페이지네이션 응답 DTO로 반환
        return new PaginatedResponseDto<>(
                orderResponseDtos,
                orderIdPage.getNumber(),
                orderIdPage.getSize(),
                orderIdPage.getTotalPages(),
                orderIdPage.getTotalElements()
        );
    }

    public OrderAddressResponseDto updateOrderAddress(long id, OrderAddressPatchDto addressPatchDto) {
        // DB에서 주문 조회, 없는 경우 예외 발생
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 배송 진행중인 상품이 없고 결제 대기중, 결제 완료 상태인 상품이 있을 때만 주소 수정 가능
        order.getOrderProducts()
                .stream()
                .map(OrderProduct::getStatus)
                .distinct()
                .peek(status -> {
                    if (status == OrderProductStatus.PREPARING_FOR_DELIVERY
                            || status == OrderProductStatus.SHIPPING
                            || status == OrderProductStatus.DELIVERED) {
                        throw new BusinessLogicException(ExceptionCode.CANNOT_UPDATE_ORDER_ADDRESS);
                    }
                })
                .filter(status ->
                        status == OrderProductStatus.WAITING_FOR_PAYMENT
                                || status == OrderProductStatus.PAYMENT_FINISHED)
                .findAny()
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.CANNOT_UPDATE_ORDER_ADDRESS));

        // DTO에 입력된 값으로 주소 수정
        Address address = order.getAddress();
        Optional.ofNullable(addressPatchDto.getRecipient()).ifPresent(address::setRecipient);
        Optional.ofNullable(addressPatchDto.getZonecode()).ifPresent(address::setZonecode);
        Optional.ofNullable(addressPatchDto.getAddress()).ifPresent(address::setAddress);
        Optional.ofNullable(addressPatchDto.getDetailAddress()).ifPresent(address::setDetailAddress);
        Optional.ofNullable(addressPatchDto.getPhone()).ifPresent(address::setPhone);

        // 응답 DTO로 매핑 후 반환
        return mapper.orderToAddressResponseDto(order);
    }

    public OrderResponseDto cancelOrder(long id, OrderCancelDto cancelDto) {
        // DB에서 주문 조회, 없는 경우 예외 발생
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 주문한 제품 ID Set 생성
        Set<Integer> productIds = order.getOrderProducts()
                .stream()
                .map(OrderProduct::getProductId)
                .collect(Collectors.toSet());

        // DTO를 Map<productId, quantity>로 만든다. DTO에 중복된 ID가 있는 경우 quantity를 더한다.
        // 취소하려는 제품 ID가 주문한 제품 ID에 없는 경우 예외 발생
        Map<Integer, Integer> cancelMap = new HashMap<>();
        for (OrderProductCancelDto dto : cancelDto.getProducts()) {
            int productId = dto.getProductId();

            if (!productIds.contains(productId)) {
                throw new BusinessLogicException(ExceptionCode.CANNOT_CANCEL_ORDER);
            }

            cancelMap.merge(productId, dto.getQuantity(), Integer::sum);
        }

        // 취소 가능한 OrderProduct만 분리
        // 결제 대기, 결제 완료, 배송 준비 중일 때에만 취소 가능
        List<OrderProduct> cancelableOrderProducts = order.getOrderProducts()
                .stream()
                .filter(orderProduct -> {
                    OrderProductStatus status = orderProduct.getStatus();

                    return status == OrderProductStatus.WAITING_FOR_PAYMENT
                            || status == OrderProductStatus.PAYMENT_FINISHED
                            || status == OrderProductStatus.PREPARING_FOR_DELIVERY;
                })
                .collect(Collectors.toList());

        // 취소 완료된 수량 집계, 제품 재고를 수정하는 데에 사용
        Map<Integer, Integer> productIdCanceledMap = new HashMap<>();

        // 취소 처리 진행
        cancelMap.forEach((productId, quantity) -> {
            // 제품 ID에 해당하는 OrderProduct만 분리
            List<OrderProduct> orderProducts = cancelableOrderProducts.stream()
                    .filter(orderProduct -> orderProduct.getProductId() == productId)
                    .collect(Collectors.toList());

            // 취소 가능한 수량보다 취소 요청 수량이 큰 경우 예외 발생
            int cancelableQuantity = orderProducts.stream()
                    .mapToInt(OrderProduct::getQuantity)
                    .sum();
            if (cancelableQuantity < quantity) {
                throw new BusinessLogicException(ExceptionCode.CANNOT_CANCEL_ORDER);
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
                        productIdCanceledMap.merge(productId, orderProduct.getQuantity(), Integer::sum);
                        // 취소 요청 수량보다 OrderProduct의 구매 수량이 많으면 취소 요청 수량만큼 구매 수량을 줄인다.
                        // 취소된 수량 만큼 새로운 OrderProduct를 만들어서 기록해준다.
                    } else {
                        orderProduct.setQuantity(orderProduct.getQuantity() - quantity);
                        OrderProduct canceledOrderProduct =
                                new OrderProduct(order, productId, orderProduct.getPrice(), quantity);
                        canceledOrderProduct.setStatus(OrderProductStatus.CANCELED);
                        order.getOrderProducts().add(canceledOrderProduct);
                        productIdCanceledMap.merge(productId, quantity, Integer::sum);
                        quantity = 0;
                    }
                    // 배송 준비 중인 경우 취소 대기 처리
                } else {
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

        // 취소한 만큼 재고 증가
        productService.updateProductsStock(productIdCanceledMap);

        // OrderProduct가 추가된 부분을 DB에 저장한다.
        orderRepository.flush();

        // 제품 정보 조회
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds)
                .stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // 응답 DTO로 매핑 후 반환
        return mapper.orderToResponseDto(order, productMap);
    }

}
