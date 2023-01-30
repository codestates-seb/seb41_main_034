package com.codestates.seb41_main_034.cart.dto;

import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class CartItemPostDto {

    @NotNull
    @Positive
    private int productId;

    @NotNull
    @Positive
    private int quantity;

}
