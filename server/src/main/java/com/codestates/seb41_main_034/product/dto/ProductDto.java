package com.codestates.seb41_main_034.product.dto;

import com.codestates.seb41_main_034.product.entity.ProductCategory;
import com.codestates.seb41_main_034.product.entity.ProductStatus;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
public class ProductDto {

    private int id;

    private String name;

    private int price;

    private int stock;

    private ProductStatus status;

    private ProductCategory category;

    private List<String> imageUrls;

    private List<String> detailImageUrls;

    private int createdBy;

    private int modifiedBy;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
