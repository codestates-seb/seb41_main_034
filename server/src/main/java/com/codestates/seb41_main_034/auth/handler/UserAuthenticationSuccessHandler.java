package com.codestates.seb41_main_034.auth.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.core.Authentication;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
public class UserAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
    @Override
    public void onAuthenticationSuccess
            (HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException {
        log.info("# Authenticated successfully!");
    }
}
