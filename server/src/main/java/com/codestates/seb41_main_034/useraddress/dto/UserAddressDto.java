package com.codestates.seb41_main_034.useraddress.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class UserAddressDto {

    private long id;

    private String recipient;

    private String zonecode;

    private String address;

    private String detailAddress;

    private String phone;

    private boolean isPrimary;

    private int createdBy;

    private int modifiedBy;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
