package com.codestates.seb41_main_034.auth.config;

import com.codestates.seb41_main_034.auth.handler.UserAccessDeniedHandler;
import com.codestates.seb41_main_034.auth.handler.UserAuthenticationEntryPoint;
import com.codestates.seb41_main_034.auth.jwt.JwtTokenizer;
import com.codestates.seb41_main_034.auth.userdetails.CustomUserDetailsService;
import com.codestates.seb41_main_034.auth.utils.CustomAuthorityUtils;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

import static org.springframework.security.config.Customizer.withDefaults;

@AllArgsConstructor
@EnableWebSecurity
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;
    private final CustomUserDetailsService customUserDetailsService;

//    @Value("${spring.security.oauth2.client.registration.google.clientId}")
//    private String clientId;
//
//    @Value("${spring.security.oauth2.client.registration.google.clientSecret}")
//    private String clientSecret;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http
                .headers().frameOptions().sameOrigin()
                .and()
                .csrf().disable()
                .cors(withDefaults())
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new UserAuthenticationEntryPoint())
                .accessDeniedHandler(new UserAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer(jwtTokenizer, authorityUtils, customUserDetailsService))
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.GET, "/api/v1/user/duplicate-check").permitAll()
                        .antMatchers(HttpMethod.GET, "/api/v1/user/*").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/user/*").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/api/v1/user/*").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/api/v1/user-address").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/v1/user-address").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/v1/user-address/*").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/user-address/*").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/api/v1/user-address/*").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/api/v1/product").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/product/*").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/api/v1/ordering").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/v1/order/*").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/ordering/*/prepare").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/ordering/*/ship").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/ordering/*/confirm-cancellation").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/ordering/**").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/api/v1/question").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/v1/question/question-history").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/question/*").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/api/v1/question/*").hasRole("USER")
                        .antMatchers(HttpMethod.POST, "/api/v1/question/*/answer").hasRole("ADMIN")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/question/*/answer").hasRole("ADMIN")
                        .antMatchers(HttpMethod.POST, "/api/v1/review").hasRole("USER")
                        .antMatchers(HttpMethod.GET, "/api/v1/review/review-history").hasRole("USER")
                        .antMatchers(HttpMethod.PATCH, "/api/v1/review/*").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/api/v1/review/*").hasRole("USER")
                        .anyRequest().permitAll()
                );
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(List.of("*"));
        configuration.setAllowedMethods(List.of("*"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setExposedHeaders(List.of("Authorization", "refreshToken"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);

        return source;
    }

}
