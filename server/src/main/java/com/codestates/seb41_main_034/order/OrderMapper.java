package com.codestates.seb41_main_034.order;

import com.codestates.seb41_main_034.common.Address;
import com.codestates.seb41_main_034.order.dto.OrderAddressResponseDto;
import com.codestates.seb41_main_034.order.dto.OrderProductResponseDto;
import com.codestates.seb41_main_034.order.dto.OrderResponseDto;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.order.entity.OrderProduct;
import com.codestates.seb41_main_034.order.mock.product.Product;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class OrderMapper {

    public OrderResponseDto orderToResponseDto(Order order, Map<Integer, Product> productMap) {
        Address address = order.getAddress();

        List<OrderProductResponseDto> orderProducts =
                order.getOrderProducts()
                        .stream()
                        .map(orderProduct ->
                                orderProductToResponseDto(orderProduct, productMap.get(orderProduct.getProductId())))
                        .collect(Collectors.toList());

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

    public OrderProductResponseDto orderProductToResponseDto(
            OrderProduct orderProduct, Product product) {
        if (orderProduct.getProductId() != product.getId()) {
            throw new IllegalArgumentException("제품 ID가 일치하지 않습니다.");
        }

        return new OrderProductResponseDto(
                product.getId(),
                product.getName(),
                product.getImageUrl(),
                orderProduct.getPrice(),
                orderProduct.getQuantity(),
                orderProduct.getStatus(),
                orderProduct.getCreatedBy(),
                orderProduct.getModifiedBy(),
                orderProduct.getCreatedAt(),
                orderProduct.getModifiedAt()
        );
    }

    public OrderAddressResponseDto orderToAddressResponseDto(Order order) {
        Address address = order.getAddress();

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
}
