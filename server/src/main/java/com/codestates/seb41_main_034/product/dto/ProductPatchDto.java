package com.codestates.seb41_main_034.product.dto;

import com.codestates.seb41_main_034.product.entity.ProductCategory;
import com.codestates.seb41_main_034.product.entity.ProductStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
public class ProductPatchDto {

    @Size(min = 1)
    private String name;

    @PositiveOrZero
    private Integer price;

    @PositiveOrZero
    private Integer stock;

    private ProductStatus status;

    private ProductCategory category;

}
