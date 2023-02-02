package com.codestates.seb41_main_034.review.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
public class ReviewPostDto {

    @NotNull
    @Positive
    private long orderId;

    @NotNull
    @Positive
    private int productId;

    @NotBlank
    private String body;

}
