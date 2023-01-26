package com.codestates.seb41_main_034.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.List;

@Getter
@AllArgsConstructor
public class OrderPostDto {

    @Size(min = 1)
    private List<@Valid OrderProductPostDto> products;

    @NotBlank
    private String recipient;

    @NotBlank
    private String address;

}
