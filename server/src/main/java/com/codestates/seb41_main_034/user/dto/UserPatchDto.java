package com.codestates.seb41_main_034.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
public class UserPatchDto {
    @Size(min = 1)
    private String displayName;

    @NotBlank(message = "영문, 숫자를 포함한 8자 이상 비밀번호를 입력해주세요.")
    private String oldPassword;

    @NotBlank(message = "영문, 숫자를 포함한 8자 이상 비밀번호를 입력해주세요.")
    private String newPassword;

}