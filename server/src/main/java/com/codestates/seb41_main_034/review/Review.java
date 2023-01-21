package com.codestates.seb41_main_034.review;

import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.common.exception.BusinessLogicException;
import com.codestates.seb41_main_034.common.exception.ExceptionCode;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.review.dto.ReviewDto;
import com.fasterxml.jackson.core.JacksonException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.List;
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

    public ReviewDto toDto(ObjectMapper mapper, Product product) {
        Optional<Product> optionalProduct = Optional.ofNullable(product);
        String productName = optionalProduct.map(Product::getName).orElse(null);
        String productImageUrl = optionalProduct.map(presentProduct -> presentProduct.getImageUrlList(mapper))
                .map(urlList -> urlList.isEmpty() ? null : urlList.get(0)).orElse(null);

        return new ReviewDto(id, productId, productName, productImageUrl, body, getImageUrlList(mapper),
                getCreatedBy(), getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

    public ReviewDto toDto(ObjectMapper mapper) {
        return toDto(mapper, null);
    }

    public List<String> getImageUrlList(ObjectMapper mapper) {
        try {
            return mapper.readValue(getImageUrls(), new TypeReference<>() {});
        } catch (JacksonException e) {
            throw new BusinessLogicException(ExceptionCode.PRODUCT_CANNOT_READ_IMAGE_URLS);
        }
    }

}
