package com.codestates.seb41_main_034.common.auditing;

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
        // TODO: 인증된 principal로부터 유저 ID를 받아와야 한다.
        return () -> Optional.of(1);
    }

}
