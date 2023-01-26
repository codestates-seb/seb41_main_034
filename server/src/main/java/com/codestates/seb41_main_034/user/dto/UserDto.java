package com.codestates.seb41_main_034.user.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@AllArgsConstructor
public class UserDto {
    private long id;
    private String username;
    private String displayName;
    private List<String> roles;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String zonecode;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String address;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String detailAddress;
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String phone;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

}
