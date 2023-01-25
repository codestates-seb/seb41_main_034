package com.codestates.seb41_main_034.product.dto;

import com.codestates.seb41_main_034.product.entity.ProductCategory;
import com.codestates.seb41_main_034.product.entity.ProductStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PositiveOrZero;

@Getter
@AllArgsConstructor
public class ProductPostDto {

    @NotBlank
    private String name;

    @PositiveOrZero
    private int price;

    @PositiveOrZero
    private int stock;

    private ProductStatus status;

    private ProductCategory category;

}
