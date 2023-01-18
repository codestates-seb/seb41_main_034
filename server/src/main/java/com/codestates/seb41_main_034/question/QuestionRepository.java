package com.codestates.seb41_main_034.question;

import com.codestates.seb41_main_034.question.entity.Question;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Override
    @Query("select q from Question q left join fetch q.answer a " +
            "where q.id = ?1 and q.isDeleted = false and (a = null or a.isDeleted = false)")
    Optional<Question> findById(Long id);

    @Query("select q.id from Question q where q.productId = ?1 and q.isDeleted = false")
    Page<Long> findIdByProductId(int productId, Pageable pageable);

    @Query("select q from Question q left join fetch q.answer a " +
            "where q.id in ?1 and q.isDeleted = false and (a = null or a.isDeleted = false)")
    List<Question> findAllById(Iterable<Long> ids, Sort sort);

    @Query("select q.id from Question q " +
            "where q.createdBy = ?1 and cast(q.createdAt as LocalDate) between ?2 and ?3 and q.isDeleted = false")
    Page<Long> findIdByCreatedByAndDateBetween(int createdBy, LocalDate from, LocalDate to, Pageable pageable);

}
