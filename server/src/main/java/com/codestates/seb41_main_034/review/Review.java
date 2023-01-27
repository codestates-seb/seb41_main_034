package com.codestates.seb41_main_034.review;

import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.review.dto.ReviewDto;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Optional;

@Getter
@Setter
@Entity
public class Review extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int productId;

    @Column(nullable = false)
    @Type(type = "text")
    private String body;
    @Column(nullable = false)
    @Type(type = "text")
    private String imageUrls = "[]";

    public ReviewDto toDto(JsonListHelper helper, Product product, String createdByName) {
        Optional<Product> optionalProduct = Optional.ofNullable(product);
        String productName = optionalProduct.map(Product::getName).orElse(null);
        String productImageUrl = optionalProduct.map(Product::getImageUrls).map(helper::jsonToList)
                .map(urlList -> urlList.isEmpty() ? null : urlList.get(0)).orElse(null);

        return new ReviewDto(id, productId, productName, productImageUrl, body, helper.jsonToList(imageUrls),
                getCreatedBy(), createdByName, getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

    public ReviewDto toDto(JsonListHelper helper) {
        return toDto(helper, null, null);
    }

}
