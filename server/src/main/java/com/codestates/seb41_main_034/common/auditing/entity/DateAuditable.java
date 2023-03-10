package com.codestates.seb41_main_034.common.auditing.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;
import java.time.ZoneId;

@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class DateAuditable {
    @CreatedDate
    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(nullable = false)
    private LocalDateTime modifiedAt;

    @Getter
    @Column(nullable = false)
    private boolean isDeleted = false;

    public LocalDateTime getCreatedAt() {
        return createdAt.atZone(ZoneId.systemDefault())
                .withZoneSameInstant(ZoneId.of("Asia/Seoul")).toLocalDateTime();
    }

    public LocalDateTime getModifiedAt() {
        return modifiedAt.atZone(ZoneId.systemDefault())
                .withZoneSameInstant(ZoneId.of("Asia/Seoul")).toLocalDateTime();
    }
}
