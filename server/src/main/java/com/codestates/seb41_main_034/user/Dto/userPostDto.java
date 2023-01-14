package com.codestates.seb41_main_034.user.Dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;


@Getter
@NoArgsConstructor

public class userPostDto {
    @NotBlank(message = "아이디는 공백일 수 없습니다.")
        private String userId;

    @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@!%*#?&])[A-Za-z\\d@!%*#?&]{8,}$")
    @NotBlank(message = "비밀번호는 공백일 수 없습니다.")
    private String password;

    @Pattern(regexp = "0104}{4}$\",
            message = "휴대폰 번호를 정확히 입력해주세요.")
    private String phoneNumber;
    }
}
