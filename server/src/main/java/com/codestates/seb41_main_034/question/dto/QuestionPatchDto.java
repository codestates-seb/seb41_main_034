package com.codestates.seb41_main_034.question.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
public class QuestionPatchDto {

    @NotBlank
    private String body;

}
