package com.codestates.seb41_main_034.question.entity;

import com.codestates.seb41_main_034.common.JsonListHelper;
import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.question.dto.AnswerDto;
import com.codestates.seb41_main_034.question.dto.QuestionDto;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.List;
import java.util.Map;
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

    public QuestionDto toDto(JsonListHelper helper, Product product, Map<Integer, String> idNameMap) {
        List<String> urlList = helper.jsonToList(product.getImageUrls());
        String productImageUrl = urlList.isEmpty() ? null : urlList.get(0);
        AnswerDto answerDto = Optional.ofNullable(answer)
                .map(_answer -> _answer.toDto(idNameMap.get(_answer.getCreatedBy()))).orElse(null);

        return new QuestionDto(id, productId, product.getName(), productImageUrl, body, answerDto,
                getCreatedBy(), idNameMap.get(getCreatedBy()), getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

    public QuestionDto toDto() {
        AnswerDto answerDto = Optional.ofNullable(answer).map(Answer::toDto).orElse(null);

        return new QuestionDto(id, productId, null, null, body, answerDto,
                getCreatedBy(), null, getModifiedBy(), getCreatedAt(), getModifiedAt());
    }

}
