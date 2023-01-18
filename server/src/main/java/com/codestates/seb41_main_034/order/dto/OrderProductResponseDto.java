package com.codestates.seb41_main_034.order.dto;

import com.codestates.seb41_main_034.order.entity.OrderProduct.OrderProductStatus;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@JsonInclude(Include.NON_NULL)
public class OrderProductResponseDto {

    private int productId;

    private String productName;

    private String imageUrl;

    private int price;

    private int quantity;

    private OrderProductStatus status;

    private int createdBy;

    private int modifiedBy;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
