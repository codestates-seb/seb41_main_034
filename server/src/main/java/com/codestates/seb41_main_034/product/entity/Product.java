package com.codestates.seb41_main_034.product.entity;

import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.product.dto.ProductDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Product extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private int stock;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ProductStatus status = ProductStatus.DRAFT;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ProductCategory category = ProductCategory.NO_CATEGORY;

    @Column(nullable = false)
    @Type(type = "text")
    private String imageUrls = "[]";

    @Column(nullable = false)
    @Type(type = "text")
    private String detailImageUrls = "[]";

    public Product(String name, int price, int stock) {
        this.name = name;
        this.price = price;
        this.stock = stock;
    }

    public ProductDto toDto(JsonListHelper helper) {
        return new ProductDto(
                id, name, price, stock, status, category,
                helper.jsonToList(imageUrls), helper.jsonToList(detailImageUrls),
                getCreatedBy(), getModifiedBy(), getCreatedAt(), getModifiedAt()
        );
    }

}
