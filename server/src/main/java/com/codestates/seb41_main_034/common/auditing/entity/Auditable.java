package com.codestates.seb41_main_034.common.auditing.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;

@Getter
@Setter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
public abstract class Auditable extends DateAuditable {

    @CreatedBy
    @Column(nullable = false, updatable = false)
    private int createdBy;

    @LastModifiedBy
    @Column(nullable = false)
    private int modifiedBy;

}
