package com.codestates.seb41_main_034.order.controller;

import com.codestates.seb41_main_034.order.dto.OrderPostDto;
import com.codestates.seb41_main_034.order.dto.OrderResponseDto;
import com.codestates.seb41_main_034.order.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@AllArgsConstructor
@Validated
@RestController
@RequestMapping("/order")
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderResponseDto> postOrder(@Valid OrderPostDto postDto) {
        return new ResponseEntity<>(orderService.createOrder(postDto), HttpStatus.CREATED);
    }

}
