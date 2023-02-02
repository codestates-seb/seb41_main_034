package com.codestates.seb41_main_034.question.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class AnswerDto {

    private String body;

    private int createdBy;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String createdByName;

    private int modifiedBy;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}