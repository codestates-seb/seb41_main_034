package com.codestates.seb41_main_034.order.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.Valid;
import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class OrderCancelDto {

    private List<@Valid OrderProductCancelDto> products;

}
