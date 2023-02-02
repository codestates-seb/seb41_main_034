package com.codestates.seb41_main_034.useraddress.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

@Getter
@AllArgsConstructor
public class UserAddressPostDto {

    @NotBlank
    private String recipient;

    @NotBlank
    private String address;

    private boolean isPrimary;

}
