package com.codestates.seb41_main_034.review.dto;

import lombok.Getter;

import javax.validation.constraints.Size;

@Getter
public class ReviewPatchDto {

    @Size(min = 1)
    private String body;

    private boolean[] deleteImage;

}
