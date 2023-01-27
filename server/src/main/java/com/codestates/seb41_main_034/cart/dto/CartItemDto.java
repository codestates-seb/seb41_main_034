package com.codestates.seb41_main_034.cart.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class CartItemDto {

    private long id;

    private int userId;

    private int productId;

    private String productName;

    private String imageUrl;

    private Integer price;

    private int quantity;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
