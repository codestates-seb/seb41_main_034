package com.codestates.seb41_main_034.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class OrderAddressPatchDto {

    @NotBlank
    private String recipient;

    @NotBlank
    private String address;

}
