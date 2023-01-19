package com.codestates.seb41_main_034.order;

import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.order.dto.*;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.order.entity.OrderProduct;
import com.codestates.seb41_main_034.order.entity.OrderProductStatus;
import com.codestates.seb41_main_034.product.ProductService;
import com.codestates.seb41_main_034.product.entity.Product;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
public class OrderFacade {

    private final OrderService orderService;

    private final ProductService productService;

    @Transactional
    public OrderDto createOrder(OrderPostDto postDto) {
        // 입력 받은 상품 ID가 유효하고 주문 가능한지 확인 및 상품 정보 조회
        Set<Integer> productIds = postDto.getProducts().stream()
                .map(OrderProductPostDto::getProductId).collect(Collectors.toSet());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds)
                .stream()
                .peek(productDto -> {
                    switch (productDto.getStatus()) {
                        case UNAVAILABLE:
                            throw new BusinessLogicException(ExceptionCode.ORDER_PRODUCT_IS_UNAVAILABLE);
                        case DRAFT:
                            throw new BusinessLogicException(ExceptionCode.PRODUCT_NOT_FOUND);
                    }
                })
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // 주문 저장
        Order order = orderService.createOrder(postDto, productMap);

        // 주문한 만큼 재고 감소
        for (OrderProduct orderProduct : order.getOrderProducts()) {
            productService.updateProductStock(orderProduct.getProductId(), -orderProduct.getQuantity());
        }

        // DTO로 매핑 후 반환
        return order.toDto(productMap);
    }

    // TODO: 주문 조회, 수정 시 인증된 회원에게만 인가되도록 처리 필요

    public OrderDto readOrder(long orderId) {
        // 주문 조회
        Order order = orderService.readOrder(orderId);

        // 주문한 상품 정보 조회
        Set<Integer> productIds = order.getOrderProducts().stream()
                .map(OrderProduct::getProductId).collect(Collectors.toSet());
        Map<Integer, Product> productDtoMap = productService.getVerifiedProducts(productIds).stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // DTO로 변환 후 반환
        return order.toDto(productDtoMap);
    }

    public PaginatedData<OrderDto> readOrders(int createdBy, LocalDate from, LocalDate to, Pageable pageable) {
        // from, to 기본값 설정
        from = Optional.ofNullable(from).orElse(LocalDate.of(2023, 1, 1));
        to = Optional.ofNullable(to).orElse(LocalDate.now());

        // 주문 목록 Page 조회
        Page<Order> orderPage = orderService.readOrders(createdBy, from, to, pageable);

        // 주문 목록에 있는 상품을 한 번에 조회
        Set<Integer> productIds = orderPage.get().flatMap(order -> order.getOrderProducts().stream())
                .map(OrderProduct::getProductId).collect(Collectors.toSet());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds).stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // 페이지네이션 DTO로 변환 후 반환
        return PaginatedData.of(orderPage.map(order -> order.toDto(productMap)));
    }

    public OrderDto updateOrderAddress(long orderId, OrderAddressPatchDto addressPatchDto) {
        // 주문 주소 수정
        Order order = orderService.updateOrderAddress(orderId, addressPatchDto);

        // DTO로 변환 후 반환
        return order.toDto();
    }

    @Transactional
    public OrderDto updateOrderCancel(long orderId, OrderCancelDto cancelDto) {
        // 주문 조회
        Order order = orderService.readOrder(orderId);

        // 기존 취소된 수량 집계
        Map<Integer, Integer> productIdDeltaMap = new HashMap<>();
        for (OrderProduct orderProduct : order.getOrderProducts()) {
            if (orderProduct.getStatus() == OrderProductStatus.CANCELED) {
                productIdDeltaMap.merge(orderProduct.getProductId(), -orderProduct.getQuantity(), Integer::sum);
            }
        }

        // 주문 취소
        Order updatedOrder = orderService.updateOrderCancel(orderId, cancelDto);

        // 취소된 수량 집계
        for (OrderProduct product : updatedOrder.getOrderProducts()) {
            if (product.getStatus() == OrderProductStatus.CANCELED) {
                productIdDeltaMap.merge(product.getProductId(), product.getQuantity(), Integer::sum);
            }
        }

        // 취소 완료된 만큼 재고 증가
        productIdDeltaMap.forEach(productService::updateProductStock);

        // 주문한 상품 ID Set 생성
        Set<Integer> productIds = updatedOrder.getOrderProducts().stream()
                .map(OrderProduct::getProductId).collect(Collectors.toSet());

        // 상품 정보 조회
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds).stream()
                .collect(Collectors.toMap(Product::getId, Function.identity()));

        // 응답 DTO로 매핑 후 반환
        return updatedOrder.toDto(productMap);
    }

    public OrderDto updateOrderPay(long orderId) {
        // TODO: 결제 정보 확인 필요

        Order order = orderService.updateOrderPay(orderId);

        return order.toDto();
    }

    public OrderDto updateOrderPrepare(long orderId) {
        // 주문 배송 준비 처리
        Order order = orderService.updateOrderPrepare(orderId);

        // DTO에 매핑 후 반환
        return order.toDto();
    }

    public OrderDto updateOrderShip(long orderId) {
        // 주문 배송 처리
        Order order = orderService.updateOrderShip(orderId);

        // DTO에 매핑 후 반환
        return order.toDto();
    }

    @Transactional
    public OrderDto updateOrderConfirmCancellation(long orderId) {
        // 주문 조회
        Order order = orderService.readOrder(orderId);

        // 기존 취소된 수량 집계
        Map<Integer, Integer> productIdDeltaMap = order.getOrderProducts().stream()
                .filter(orderProduct -> orderProduct.getStatus() == OrderProductStatus.CANCELED)
                .collect(Collectors.toMap(OrderProduct::getProductId, OrderProduct::getQuantity, Integer::sum));

        // 주문 취소
        Order updatedOrder = orderService.updateOrderConfirmCancellation(orderId);

        // 취소된 수량 집계
        for (OrderProduct orderProduct : updatedOrder.getOrderProducts()) {
            if (orderProduct.getStatus() == OrderProductStatus.CANCELED) {
                productIdDeltaMap.merge(orderProduct.getProductId(), -orderProduct.getQuantity(), Integer::sum);
            }
        }

        // 취소 완료된 만큼 재고 증가
        productIdDeltaMap.forEach(productService::updateProductStock);

        // DTO에 매핑 후 반환
        return updatedOrder.toDto();
    }

}
