package com.codestates.seb41_main_034.order.dto;

import com.codestates.seb41_main_034.order.entity.OrderProduct.OrderProductStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class OrderProductResponseDto {

    private int productId;

    private String productName;

    private String imageUrl;

    private int price;

    private int quantity;

    private OrderProductStatus status;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
