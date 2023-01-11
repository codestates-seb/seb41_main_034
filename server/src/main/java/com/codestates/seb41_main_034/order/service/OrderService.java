package com.codestates.seb41_main_034.order.service;

import com.codestates.seb41_main_034.common.jpa.Address;
import com.codestates.seb41_main_034.order.dto.OrderPostDto;
import com.codestates.seb41_main_034.order.dto.OrderProductPostDto;
import com.codestates.seb41_main_034.order.dto.OrderProductResponseDto;
import com.codestates.seb41_main_034.order.dto.OrderResponseDto;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.order.entity.OrderProduct;
import com.codestates.seb41_main_034.order.repository.OrderRepository;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.product.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    private final ProductService productService;

    public OrderResponseDto createOrder(OrderPostDto postDto) {
        List<Integer> productIds = postDto.getProducts()
                .stream()
                .map(OrderProductPostDto::getProductId)
                .distinct()
                .collect(Collectors.toList());

        Map<Integer, Product> productMap =
                productService.getVerifiedProducts(productIds)
                        .stream()
                        .collect(Collectors.toMap(Product::getId, Function.identity()));

        Order order = new Order();
        order.setOrderProducts(
                postDto.getProducts()
                        .stream()
                        .map(dto -> new OrderProduct(order, dto.getProductId(), dto.getQuantity()))
                        .collect(Collectors.toList())
        );
        Address address = new Address(
                postDto.getRecipient(),
                postDto.getZonecode(),
                postDto.getAddress(),
                postDto.getDetailAddress(),
                postDto.getPhone()
        );
        order.setAddress(address);

        Order createdOrder = orderRepository.save(order);

        productService.updateProductsStock(
                createdOrder.getOrderProducts()
                        .stream()
                        .collect(Collectors.toMap(
                                OrderProduct::getProductId,
                                orderProduct -> -orderProduct.getQuantity()
                        ))
        );

        return orderToOrderResponseDto(createdOrder, productMap);
    }

    private OrderResponseDto orderToOrderResponseDto(Order order, Map<Integer, Product> productMap) {
        Address address = order.getAddress();

        return new OrderResponseDto(
                order.getId(),
                order.getOrderProducts()
                        .stream()
                        .map(orderProduct -> {
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
                        })
                        .collect(Collectors.toList()),
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
