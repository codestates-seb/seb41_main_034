package com.codestates.seb41_main_034.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@AllArgsConstructor
public class OrderProductPostDto {

    @NotNull
    @Positive
    private int productId;

    @NotNull
    @Positive
    private int price;

    @NotNull
    @Positive
    private int quantity;

}
