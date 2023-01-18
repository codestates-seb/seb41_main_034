package com.codestates.seb41_main_034.question;

import com.codestates.seb41_main_034.question.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Override
    @Query("select q from Question q left join fetch Answer a " +
            "where q.id = ?1 and q.isDeleted = false and a.isDeleted = false")
    Optional<Question> findById(Long id);

}
