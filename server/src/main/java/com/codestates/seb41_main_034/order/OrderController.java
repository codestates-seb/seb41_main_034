package com.codestates.seb41_main_034.order;

import com.codestates.seb41_main_034.common.PaginatedResponseDto;
import com.codestates.seb41_main_034.order.dto.*;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.web.PageableDefault;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.PastOrPresent;
import javax.validation.constraints.Positive;
import java.time.LocalDate;

@AllArgsConstructor
@Validated
@RestController
@RequestMapping("/api/v1")
public class OrderController {

    private final OrderService orderService;

    @PostMapping("/ordering")
    public ResponseEntity<OrderResponseDto> postOrder(@Valid @RequestBody OrderPostDto postDto) {
        OrderResponseDto responseDto = orderService.createOrder(postDto);

        return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<OrderResponseDto> getOrder(@Positive @PathVariable("orderId") long id) {
        OrderResponseDto responseDto = orderService.readOrder(id);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @GetMapping("/order/order-history")
    public ResponseEntity<PaginatedResponseDto<OrderResponseDto>> getMyOrders(
//            @AuthenticationPrincipal User user,
            @PastOrPresent @RequestParam(required = false) @DateTimeFormat(iso = ISO.DATE) LocalDate from,
            @PastOrPresent @RequestParam(required = false) @DateTimeFormat(iso = ISO.DATE) LocalDate to,
            @PageableDefault(sort = "id", direction = Direction.DESC) Pageable pageable
    ) {
        // TODO: 인증된 principal로부터 유저 ID를 얻어야 한다.
        int createdBy = 1;

        PaginatedResponseDto<OrderResponseDto> responseDto = orderService.readOrders(createdBy, from, to, pageable);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/address")
    public ResponseEntity<OrderAddressResponseDto> patchOrderAddress(
            @Positive @PathVariable("orderId") long id,
            @Valid @RequestBody OrderAddressPatchDto patchDto
    ) {
        OrderAddressResponseDto addressResponseDto = orderService.updateOrderAddress(id, patchDto);

        return new ResponseEntity<>(addressResponseDto, HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/cancel")
    public ResponseEntity<OrderResponseDto> patchOrderCancel(
            @Positive @PathVariable("orderId") long id,
            @Valid @RequestBody OrderCancelDto cancelDto
    ) {
        OrderResponseDto responseDto = orderService.cancelOrder(id, cancelDto);

        return new ResponseEntity<>(responseDto, HttpStatus.OK);
    }

}
