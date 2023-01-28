package com.codestates.seb41_main_034.review;

import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.review.dto.ReviewDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Review extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private long orderId;

    @Column(nullable = false)
    private int productId;

    public Review(long orderId, int productId, String body) {
        this.orderId = orderId;
        this.productId = productId;
        this.body = body;
    }

    @Column(nullable = false)
    @Type(type = "text")
    private String body;

    public ReviewDto toDto(JsonListHelper helper, Product product, String createdByName) {
        List<String> productImageUrlList = helper.jsonToList(product.getImageUrls());
        String productImageUrl = productImageUrlList.isEmpty() ? null : productImageUrlList.get(0);

        return new ReviewDto(id, productId, product.getName(), productImageUrl, body,
                getCreatedBy(), createdByName, getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

    public ReviewDto toDto() {

        return new ReviewDto(id, productId, null, null, body,
                getCreatedBy(), null, getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

}
