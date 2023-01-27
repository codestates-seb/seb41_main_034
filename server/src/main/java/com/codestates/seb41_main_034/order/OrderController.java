package com.codestates.seb41_main_034.order;

import com.codestates.seb41_main_034.common.response.PaginatedData;
import com.codestates.seb41_main_034.common.response.Response;
import com.codestates.seb41_main_034.order.dto.OrderAddressPatchDto;
import com.codestates.seb41_main_034.order.dto.OrderCancelDto;
import com.codestates.seb41_main_034.order.dto.OrderDto;
import com.codestates.seb41_main_034.order.dto.OrderPostDto;
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
@RestController
@Validated
@RequestMapping("/api/v1")
public class OrderController {

    private final OrderFacade orderFacade;

    @PostMapping("/ordering")
    public ResponseEntity<Response<OrderDto>> postOrder(@Valid @RequestBody OrderPostDto postDto) {
        return new ResponseEntity<>(Response.of(orderFacade.createOrder(postDto)), HttpStatus.CREATED);
    }

    @GetMapping("/order/{orderId}")
    public ResponseEntity<Response<OrderDto>> getOrder(@Positive @PathVariable long orderId) {
        return new ResponseEntity<>(Response.of(orderFacade.readOrder(orderId)), HttpStatus.OK);
    }

    @GetMapping("/order/order-history")
    public ResponseEntity<Response<PaginatedData<OrderDto>>> getMyOrders(
            @PastOrPresent @RequestParam(required = false) @DateTimeFormat(iso = ISO.DATE) LocalDate from,
            @PastOrPresent @RequestParam(required = false) @DateTimeFormat(iso = ISO.DATE) LocalDate to,
            @PageableDefault(sort = "id", direction = Direction.DESC) Pageable pageable
    ) {
        return new ResponseEntity<>(Response.of(orderFacade.readOrders(from, to, pageable)), HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/address")
    public ResponseEntity<Response<OrderDto>> patchOrderAddress(@Positive @PathVariable long orderId,
                                                                @Valid @RequestBody OrderAddressPatchDto patchDto) {
        return new ResponseEntity<>(Response.of(orderFacade.updateOrderAddress(orderId, patchDto)), HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/cancel")
    public ResponseEntity<Response<OrderDto>> patchOrderCancel(@Positive @PathVariable long orderId,
                                                               @Valid @RequestBody OrderCancelDto cancelDto) {
        return new ResponseEntity<>(Response.of(orderFacade.updateOrderCancel(orderId, cancelDto)), HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/pay")
    public ResponseEntity<Response<OrderDto>> patchOrderPay(@Positive @PathVariable long orderId) {
        return new ResponseEntity<>(Response.of(orderFacade.updateOrderPay(orderId)), HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/prepare")
    public ResponseEntity<Response<OrderDto>> patchOrderPrepare(@Positive @PathVariable long orderId) {
        return new ResponseEntity<>(Response.of(orderFacade.updateOrderPrepare(orderId)), HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/ship")
    public ResponseEntity<Response<OrderDto>> patchOrderShip(@Positive @PathVariable long orderId) {
        return new ResponseEntity<>(Response.of(orderFacade.updateOrderShip(orderId)), HttpStatus.OK);
    }

    @PatchMapping("/ordering/{orderId}/confirm-cancellation")
    public ResponseEntity<Response<OrderDto>> patchOrderConfirmCancellation(@Positive @PathVariable long orderId) {
        return new ResponseEntity<>(Response.of(orderFacade.updateOrderConfirmCancellation(orderId)), HttpStatus.OK);
    }

}
