package com.codestates.seb41_main_034.order.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
public class OrderDto {

    private long id;

    private List<OrderProductDto> products;

    private String recipient;

    private String zonecode;

    private String address;

    private String detailAddress;

    @JsonInclude(Include.NON_NULL)
    private String phone;

    private int createdBy;

    private int modifiedBy;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
