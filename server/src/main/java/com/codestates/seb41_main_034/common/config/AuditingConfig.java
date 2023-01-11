package com.codestates.seb41_main_034.common.config;

import com.codestates.seb41_main_034.user.entity.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.util.Optional;

@Configuration
@EnableJpaAuditing
public class AuditingConfig {

    @Bean
    public AuditorAware<Integer> auditorProvider() {
        return () -> Optional.of(new User()).map(User::getId);
    }
}
