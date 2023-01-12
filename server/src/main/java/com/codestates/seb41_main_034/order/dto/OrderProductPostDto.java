package com.codestates.seb41_main_034.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Positive;

@Getter
@AllArgsConstructor
public class OrderProductPostDto {

    @Positive
    private int productId;

    @Positive
    private int price;

    @Positive
    private int quantity;

}
