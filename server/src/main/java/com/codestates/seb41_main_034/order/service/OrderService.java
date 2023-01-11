package com.codestates.seb41_main_034.order.service;

import com.codestates.seb41_main_034.common.dto.PaginatedResponseDto;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException.ExceptionCode;
import com.codestates.seb41_main_034.common.jpa.Address;
import com.codestates.seb41_main_034.order.dto.OrderPostDto;
import com.codestates.seb41_main_034.order.dto.OrderProductPostDto;
import com.codestates.seb41_main_034.order.dto.OrderResponseDto;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.order.entity.OrderProduct;
import com.codestates.seb41_main_034.order.mapper.OrderMapper;
import com.codestates.seb41_main_034.order.repository.OrderRepository;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.product.service.ProductService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@AllArgsConstructor
@Service
@Transactional
public class OrderService {

    private final OrderRepository orderRepository;

    private final OrderMapper mapper;

    private final ProductService productService;

    public OrderResponseDto createOrder(OrderPostDto postDto) {
        List<Integer> productIds = postDto.getProducts()
                .stream()
                .map(OrderProductPostDto::getProductId)
                .distinct()
                .collect(Collectors.toList());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds);

        Order order = new Order();
        List<OrderProduct> orderProducts = postDto.getProducts()
                .stream()
                .map(dto -> new OrderProduct(order, dto.getProductId(), dto.getQuantity()))
                .collect(Collectors.toList());
        order.setOrderProducts(orderProducts);
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

        return mapper.orderToResponseDto(createdOrder, productMap);
    }

    @Transactional(readOnly = true)
    public OrderResponseDto readOrder(long id) {
        Order order = orderRepository.findById(id)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ORDER_NOT_FOUND));

        List<Integer> productIds = order.getOrderProducts()
                .stream()
                .map(OrderProduct::getProductId)
                .collect(Collectors.toList());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds);

        return mapper.orderToResponseDto(order, productMap);
    }

    @Transactional(readOnly = true)
    public PaginatedResponseDto<OrderResponseDto> readOrders(int createdBy, Integer year, Pageable pageable) {
        int yearToFind = Optional.ofNullable(year).orElse(LocalDate.now().getYear());

        Page<Long> orderIdPage = orderRepository.findIdByCreatedByAndYear(createdBy, yearToFind, pageable);

        List<Order> orders = orderRepository.findAllById(orderIdPage.getContent(), pageable.getSort());

        List<Integer> productIds = orders.stream()
                .flatMap(order -> order.getOrderProducts().stream())
                .map(OrderProduct::getProductId)
                .collect(Collectors.toList());
        Map<Integer, Product> productMap = productService.getVerifiedProducts(productIds);

        List<OrderResponseDto> orderResponseDtos =
                orders.stream()
                        .map(order -> mapper.orderToResponseDto(order, productMap))
                        .collect(Collectors.toList());

        return new PaginatedResponseDto<>(
                orderResponseDtos,
                orderIdPage.getNumber(),
                orderIdPage.getSize(),
                orderIdPage.getTotalPages(),
                orderIdPage.getTotalElements()
        );
    }

}
