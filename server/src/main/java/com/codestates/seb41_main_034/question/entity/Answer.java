package com.codestates.seb41_main_034.question.entity;

import com.codestates.seb41_main_034.common.auditing.entity.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Answer extends Auditable {

    @Id
    private Long questionId;

    @OneToOne(fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "question_id")
    private Question question;

    @Type(type = "text")
    @Column(nullable = false)
    private String body;

    public Answer(Question question, String body) {
        this.question = question;
        this.body = body;
    }

}
