package com.codestates.seb41_main_034.auth.config;

import com.codestates.seb41_main_034.auth.filter.JwtAuthenticationFilter;
import com.codestates.seb41_main_034.auth.filter.JwtVerificationFilter;
import com.codestates.seb41_main_034.auth.handler.UserAuthenticationFailureHandler;
import com.codestates.seb41_main_034.auth.handler.UserAuthenticationSuccessHandler;
import com.codestates.seb41_main_034.auth.jwt.JwtTokenizer;
import com.codestates.seb41_main_034.auth.userdetails.CustomUserDetailsService;
import com.codestates.seb41_main_034.auth.utils.CustomAuthorityUtils;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;

@AllArgsConstructor
public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final CustomUserDetailsService customUserDetailsService;
    private final ObjectMapper mapper;

    @Override
    public void configure(HttpSecurity builder) {
        AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

        JwtAuthenticationFilter jwtAuthenticationFilter =
                new JwtAuthenticationFilter(authenticationManager, jwtTokenizer, mapper);
        jwtAuthenticationFilter.setFilterProcessesUrl("/api/v1/user/login");
        jwtAuthenticationFilter.setAuthenticationSuccessHandler(new UserAuthenticationSuccessHandler());
        jwtAuthenticationFilter.setAuthenticationFailureHandler(new UserAuthenticationFailureHandler(mapper));

        JwtVerificationFilter jwtVerificationFilter =
                new JwtVerificationFilter(jwtTokenizer, authorityUtils, customUserDetailsService);

        builder
                .addFilter(jwtAuthenticationFilter)
                .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
    }
}
