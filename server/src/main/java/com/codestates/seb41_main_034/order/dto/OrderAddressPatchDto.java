package com.codestates.seb41_main_034.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

@Getter
@AllArgsConstructor
public class OrderAddressPatchDto {

    @Size(min = 1)
    private String recipient;

    @Pattern(regexp = "\\A\\d{5}\\z")
    private String zonecode;

    @Size(min = 1)
    private String address;

    @Size(min = 1)
    private String detailAddress;

    @Pattern(regexp = "\\A\\d{10,12}\\z")
    private String phone;

}
