package com.codestates.seb41_main_034.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Getter
@AllArgsConstructor
public class UserPostDto {
    @NotBlank(message = "아이디를 입력해주세요.")
    private String username;

    @NotBlank(message = "비밀번호를 입력해주세요.")
    private String password;

    @NotBlank(message = "이름을 입력해주세요.")
    private String displayName;

    @NotNull
    @Pattern(regexp = "\\A\\d{5}\\z")
    private String zonecode;

    @NotBlank
    private String address;

    @NotBlank
    private String detailAddress;

    @Pattern(regexp = "\\A\\d{10,12}\\z")
    private String phone;

}

