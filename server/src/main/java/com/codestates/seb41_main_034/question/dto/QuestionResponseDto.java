package com.codestates.seb41_main_034.question.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class QuestionResponseDto {

    private long id;

    private int productId;

    private String productName;

    private String imageUrl;

    private String body;

    private AnswerResponseDto answer;

    private int createdBy;
    // TODO: 작성자 이름 필요

    private int modifiedBy;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
