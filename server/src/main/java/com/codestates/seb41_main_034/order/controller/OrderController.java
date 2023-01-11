package com.codestates.seb41_main_034.order.controller;

import com.codestates.seb41_main_034.common.dto.PaginatedResponseDto;
import com.codestates.seb41_main_034.order.dto.OrderPostDto;
import com.codestates.seb41_main_034.order.dto.OrderResponseDto;
import com.codestates.seb41_main_034.order.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Min;
import javax.validation.constraints.Positive;

@AllArgsConstructor
@Validated
@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    public ResponseEntity<OrderResponseDto> postOrder(@Valid @RequestBody OrderPostDto postDto) {
        OrderResponseDto responseDto = orderService.createOrder(postDto);

        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<OrderResponseDto> getOrder(@Positive @PathVariable("orderId") long id) {
        OrderResponseDto responseDto = orderService.readOrder(id);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @GetMapping("/me")
    public ResponseEntity<PaginatedResponseDto<OrderResponseDto>> getMyOrders(
//            @AuthenticationPrincipal User user,
            @Min(2023) @RequestParam(required = false) Integer year,
            @PageableDefault(sort = "id", direction = Direction.DESC) Pageable pageable
    ) {
        // TODO: 인증된 principal로부터 userId를 얻어야 한다.
        int createdBy = 1;

        PaginatedResponseDto<OrderResponseDto> responseDto = orderService.readOrders(createdBy, year, pageable);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

}
