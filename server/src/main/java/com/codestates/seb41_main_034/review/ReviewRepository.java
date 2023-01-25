package com.codestates.seb41_main_034.review;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.Optional;

public interface ReviewRepository extends JpaRepository<Review, Long> {

    @Override
    @Query("select r from Review r where r.id = ?1 and r.isDeleted = false")
    Optional<Review> findById(Long id);

    @Query("select r from Review r where r.productId = ?1 and r.isDeleted = false")
    Page<Review> findByProductId(int productId, Pageable pageable);

    @Query("select r from Review r " +
            "where r.createdBy = ?1 and cast(r.createdAt as LocalDate) between ?2 and ?3 and r.isDeleted = false")
    Page<Review> findByCreatedByAndDateBetween(int createdBy, LocalDate from, LocalDate to, Pageable pageable);

}
