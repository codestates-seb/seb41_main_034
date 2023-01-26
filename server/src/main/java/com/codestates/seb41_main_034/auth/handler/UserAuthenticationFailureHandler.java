package com.codestates.seb41_main_034.auth.handler;

import com.codestates.seb41_main_034.auth.utils.ErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class UserAuthenticationFailureHandler implements AuthenticationFailureHandler {
    @Override
    public void onAuthenticationFailure
            (HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException {
        log.error("# Authentication failed: {}", exception.getMessage());
        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED);
        // 에러 로그를 기록하거나 error response를 전송할 수 있음
    }

}
