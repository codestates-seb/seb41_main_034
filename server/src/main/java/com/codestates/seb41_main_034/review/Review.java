package com.codestates.seb41_main_034.review;

import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.review.dto.ReviewDto;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.databind.ObjectMapper;
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

    @Type(type = "text")
    private String body;

    @Type(type = "text")
    private String imageUrls = "[]";

    @Transient
    private static ObjectMapper mapper = new ObjectMapper();

    public ReviewDto toDto(Product product) {
        Optional<Product> optionalProductDto = Optional.ofNullable(product);
        String productName = optionalProductDto.map(Product::getName).orElse(null);
        String productImageUrl = optionalProductDto.map(Product::getImageUrlArray)
                .map(urls -> urls.length == 0 ? null : urls[0]).orElse(null);

        return new ReviewDto(id, productId, productName, productImageUrl, body, getImageUrlArray(),
                getCreatedBy(), getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

    public ReviewDto toDto() {
        return toDto(null);
    }

    public String[] getImageUrlArray() {
        try {
            return mapper.readValue(getImageUrls(), String[].class);
        } catch (JacksonException e) {
            throw new BusinessLogicException(ExceptionCode.PRODUCT_CANNOT_READ_IMAGE_URLS);
        }
    }

}
