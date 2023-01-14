package com.codestates.seb41_main_034.product;

import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
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
    private String imageUrls = "[]";

    @Column(nullable = false)
    @Type(type = "text")
    private String body;

    @Column(nullable = false)
    private boolean isDeleted = false;

    public Product(String name, int price, int stock, String body) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.body = body;
    }

    public enum ProductStatus {
        DRAFT,
        ACTIVE,
        ARCHIVED
    }

    public enum ProductCategory {
        NO_CATEGORY,
        FRUIT,
        VEGETABLE
    }

}
