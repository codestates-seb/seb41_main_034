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
        return new ResponseEntity<>(orderService.createOrder(postDto), HttpStatus.CREATED);
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<OrderResponseDto> getOrder(@Positive @PathVariable long orderId) {
        return new ResponseEntity<>(orderService.readOrder(orderId), HttpStatus.OK);
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

        return new ResponseEntity<>(orderService.readOrders(createdBy, from, to, pageable), HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/address")
    public ResponseEntity<OrderAddressResponseDto> patchOrderAddress(
            @Positive @PathVariable long orderId,
            @Valid @RequestBody OrderAddressPatchDto patchDto
    ) {
        return new ResponseEntity<>(orderService.updateOrderAddress(orderId, patchDto), HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/cancel")
    public ResponseEntity<OrderResponseDto> patchOrderCancel(
            @Positive @PathVariable long orderId,
            @Valid @RequestBody OrderCancelDto cancelDto
    ) {
        return new ResponseEntity<>(orderService.cancelOrder(orderId, cancelDto), HttpStatus.OK);
    }

}
