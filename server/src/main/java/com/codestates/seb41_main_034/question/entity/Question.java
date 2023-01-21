package com.codestates.seb41_main_034.question.entity;

import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.question.dto.AnswerDto;
import com.codestates.seb41_main_034.question.dto.QuestionDto;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Optional;

@Getter
@Setter
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int productId;

    @Type(type = "text")
    private String body;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "question")
    private Answer answer;

    public QuestionDto toDto(Product product) {
        Optional<Product> optionalProductDto = Optional.ofNullable(product);
        String productName = optionalProductDto.map(Product::getName).orElse(null);
        String productImageUrl = optionalProductDto.map(Product::getImageUrlArray)
                .map(urls -> urls.length == 0 ? null : urls[0]).orElse(null);
        AnswerDto answerDto = Optional.ofNullable(answer).map(Answer::toDto).orElse(null);

        return new QuestionDto(id, productId, productName, productImageUrl, body, answerDto,
                getCreatedBy(), getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

    public QuestionDto toDto() {
        return toDto(null);
    }

}
