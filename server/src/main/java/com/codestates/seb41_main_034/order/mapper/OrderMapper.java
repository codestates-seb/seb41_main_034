package com.codestates.seb41_main_034.order.mapper;

import com.codestates.seb41_main_034.common.jpa.Address;
import com.codestates.seb41_main_034.order.dto.OrderProductResponseDto;
import com.codestates.seb41_main_034.order.dto.OrderResponseDto;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.order.entity.OrderProduct;
import com.codestates.seb41_main_034.product.entity.Product;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Component
public class OrderMapper {

    public OrderResponseDto orderToResponseDto(Order order, Map<Integer, Product> productMap) {
        Address address = order.getAddress();

        List<OrderProductResponseDto> products =
                order.getOrderProducts()
                        .stream()
                        .map(orderProduct -> orderProductToResponseDto(orderProduct, productMap))
                        .collect(Collectors.toList());

        return new OrderResponseDto(
                order.getId(),
                products,
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
            OrderProduct orderProduct, Map<Integer, Product> productMap) {
        int id = orderProduct.getProductId();
        Product product = productMap.get(id);

        return new OrderProductResponseDto(
                id,
                product.getName(),
                product.getImageUrl(),
                product.getPrice(),
                orderProduct.getQuantity(),
                orderProduct.getStatus(),
                orderProduct.getCreatedAt(),
                orderProduct.getModifiedAt()
        );
    }

}
