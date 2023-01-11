package com.codestates.seb41_main_034.order.service;

import com.codestates.seb41_main_034.common.dto.PaginatedResponseDto;
import com.codestates.seb41_main_034.common.jpa.Address;
import com.codestates.seb41_main_034.order.dto.OrderPostDto;
import com.codestates.seb41_main_034.order.dto.OrderProductPostDto;
import com.codestates.seb41_main_034.order.dto.OrderProductResponseDto;
import com.codestates.seb41_main_034.order.dto.OrderResponseDto;
import com.codestates.seb41_main_034.order.entity.Order;
import com.codestates.seb41_main_034.order.mapper.OrderMapper;
import com.codestates.seb41_main_034.order.repository.OrderRepository;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.product.service.ProductService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;

import java.util.*;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.BDDMockito.*;

@ExtendWith(MockitoExtension.class)
class OrderServiceTest {

    @Mock
    private OrderRepository orderRepository;

    @Spy
    private OrderMapper orderMapper;

    @Mock
    private ProductService productService;

    @InjectMocks
    private OrderService orderService;

    @Test
    void createOrderTest() {
        OrderPostDto postDto = new OrderPostDto(
                List.of(new OrderProductPostDto(1, 3), new OrderProductPostDto(2, 4)),
                "홍길동",
                "13494",
                "경기 성남시 분당구 판교역로 235",
                "101호",
                "01012345678"
        );

        Product product1 = new Product();
        product1.setId(postDto.getProducts().get(0).getProductId());

        Product product2 = new Product();
        product2.setId(postDto.getProducts().get(1).getProductId());

        given(productService.getVerifiedProducts(anyIterable()))
                .willReturn(Map.of(product1.getId(), product1, product2.getId(), product2));

        given(orderRepository.save(any(Order.class)))
                .willAnswer(invocation -> invocation.getArgument(0, Order.class));

        OrderResponseDto responseDto = orderService.createOrder(postDto);

        assertEquals(postDto.getRecipient(), responseDto.getRecipient());
        assertEquals(postDto.getZonecode(), responseDto.getZonecode());
        assertEquals(postDto.getAddress(), responseDto.getAddress());
        assertEquals(postDto.getDetailAddress(), responseDto.getDetailAddress());
        assertEquals(postDto.getPhone(), responseDto.getPhone());

        Map<Integer, Integer> postProductsMap = postDto.getProducts()
                .stream()
                .collect(Collectors.toMap(OrderProductPostDto::getProductId, OrderProductPostDto::getQuantity));

        Map<Integer, Integer> responseProductsMap = responseDto.getProducts()
                .stream()
                .collect(Collectors.toMap(OrderProductResponseDto::getProductId, OrderProductResponseDto::getQuantity));

        for (int productId : postProductsMap.keySet()) {
            assertNotNull(responseProductsMap.get(productId));
            assertEquals(postProductsMap.get(productId), responseProductsMap.get(productId));
        }
    }

    @Test
    void readOrderTest() {
        long id = 1L;
        Order order = new Order();
        order.setId(id);
        order.setOrderProducts(new ArrayList<>());
        order.setAddress(new Address());

        given(orderRepository.findById(anyLong())).willReturn(Optional.of(order));

        OrderResponseDto responseDto = orderService.readOrder(id);

        assertEquals(id, responseDto.getId());
    }

    @Test
    void readOrdersTest() {
        int createdBy = 1;
        int year = 2023;
        List<Order> orders = new ArrayList<>();
        for (int i = 1; i <= 2; i++) {
            Order order = new Order();
            order.setId(i);
            order.setOrderProducts(new ArrayList<>());
            order.setAddress(new Address());
            orders.add(order);
        }
        Collections.reverse(orders);
        Pageable pageable = PageRequest.of(0, 10, Direction.DESC, "id");
        List<Long> orderIds = orders.stream().map(Order::getId).collect(Collectors.toList());
        Page<Long> orderIdPage = new PageImpl<>(orderIds, pageable, orders.size());

        given(orderRepository.findIdByCreatedByAndYear(anyInt(), anyInt(), any(Pageable.class)))
                .willReturn(orderIdPage);
        given(orderRepository.findAllById(orderIds, pageable.getSort()))
                .willReturn(orders);

        PaginatedResponseDto<OrderResponseDto> responseDto = orderService.readOrders(createdBy, year, pageable);

        for (int i = orders.size(); i >= 1; i--) {
            assertEquals(i, responseDto.getData().get(orders.size() - i).getId());
        }

        assertEquals(pageable.getPageNumber(), responseDto.getPage());
        assertEquals(pageable.getPageSize(), responseDto.getSize());
        assertEquals(orderIdPage.getTotalPages(), responseDto.getTotalPages());
        assertEquals(orders.size(), responseDto.getTotalElements());
    }

}