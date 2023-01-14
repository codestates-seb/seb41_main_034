package com.codestates.seb41_main_034.product.dto;

import com.codestates.seb41_main_034.product.Product;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
public class ProductResponseDto {

    private int id;

    private String name;

    private int price;

    private int stock;

    private Product.ProductStatus status;

    private Product.ProductCategory category;

    private List<String> imageUrls;

    private String body;

    private int createdBy;

    private int modifiedBy;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
