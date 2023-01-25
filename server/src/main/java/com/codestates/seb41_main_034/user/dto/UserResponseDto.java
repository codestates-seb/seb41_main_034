package com.codestates.seb41_main_034.user.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UserResponseDto {
    private long userId;
    private String displayName;
    private List<String> roles;
    private LocalDateTime createdAt;
    private LocalDateTime modifiedAt;

}
