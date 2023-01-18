package com.codestates.seb41_main_034.question.entity;

import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Question extends Auditable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private int productId;

    @Type(type = "text")
    private String body;

    @OneToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE}, mappedBy = "question")
    private Answer answer;

}
