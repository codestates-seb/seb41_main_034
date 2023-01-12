package com.codestates.seb41_main_034.order;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.common.PaginatedResponseDto;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;
import com.codestates.seb41_main_034.order.dto.OrderPostDto;
import com.codestates.seb41_main_034.order.dto.OrderProductPostDto;
import com.codestates.seb41_main_034.order.dto.OrderResponseDto;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.order.entity.OrderProduct;
import com.codestates.seb41_main_034.product.Product;
import com.codestates.seb41_main_034.product.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.*;
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
                .distinct()
                .collect(Collectors.toList());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds);

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

            if (orderProductMap.containsKey(productId)) {
                OrderProduct orderProduct = orderProductMap.get(productId);
                orderProduct.setQuantity(orderProduct.getQuantity() + dto.getQuantity());
            } else {
                orderProductMap.put(
                        productId,
                        new OrderProduct(order, productId, dto.getPrice(), dto.getQuantity())
                );
            }
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
        productService.updateProductsStock(
                createdOrder.getOrderProducts()
                        .stream()
                        .collect(Collectors.toMap(
                                OrderProduct::getProductId,
                                orderProduct -> -orderProduct.getQuantity()
                        ))
        );

        // 응답 DTO로 매핑 후 반환
        return mapper.orderToResponseDto(createdOrder, productMap);
    }

    @Transactional(readOnly = true)
    public OrderResponseDto readOrder(long id) {
        // DB에서 주문 조회
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        // 주문한 제품 정보 조회
        List<Integer> productIds = order.getOrderProducts()
                .stream()
                .map(OrderProduct::getProductId)
                .distinct()
                .collect(Collectors.toList());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds);

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
                .distinct()
                .collect(Collectors.toList());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds);

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

}
