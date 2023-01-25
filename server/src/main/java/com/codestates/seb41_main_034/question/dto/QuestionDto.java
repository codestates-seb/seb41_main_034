package com.codestates.seb41_main_034.question.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class QuestionDto {

    private long id;

    private int productId;

    @JsonInclude(Include.NON_NULL)
    private String productName;

    @JsonInclude(Include.NON_NULL)
    private String productImageUrl;

    private String body;

    private AnswerDto answer;

    private int createdBy;
    // TODO: 작성자 이름 필요

    private int modifiedBy;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
