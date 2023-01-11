package com.codestates.seb41_main_034.order.controller;

import com.codestates.seb41_main_034.order.dto.OrderPostDto;
import com.codestates.seb41_main_034.order.dto.OrderResponseDto;
import com.codestates.seb41_main_034.order.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@AllArgsConstructor
@Validated
@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderResponseDto> postOrder(@Valid @RequestBody OrderPostDto postDto) {
        return new ResponseEntity<>(orderService.createOrder(postDto), HttpStatus.CREATED);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderResponseDto> getOrder(@Positive @PathVariable("orderId") long id) {
        return new ResponseEntity<>(orderService.readOrder(id), HttpStatus.OK);
    }

}
