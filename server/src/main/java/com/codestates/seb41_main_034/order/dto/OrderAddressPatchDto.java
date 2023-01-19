package com.codestates.seb41_main_034.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Getter
@AllArgsConstructor
public class OrderAddressPatchDto {

    @NotBlank
    private String recipient;

    @NotNull
    @Pattern(regexp = "\\A\\d{5}\\z")
    private String zonecode;

    @NotBlank
    private String address;

    @NotBlank
    private String detailAddress;

    @NotNull
    @Pattern(regexp = "\\A\\d{10,12}\\z")
    private String phone;

}
