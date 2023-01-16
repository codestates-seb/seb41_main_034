package com.codestates.seb41_main_034.product.dto;

import com.codestates.seb41_main_034.product.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.PositiveOrZero;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@AllArgsConstructor
public class ProductPatchDto {

    @Size(min = 1)
    private String name;

    @PositiveOrZero
    private Integer price;

    @PositiveOrZero
    private Integer stock;

    private Product.ProductStatus status;

    private Product.ProductCategory category;

    private List<@NotBlank String> imageUrls;

    private String body;

}
