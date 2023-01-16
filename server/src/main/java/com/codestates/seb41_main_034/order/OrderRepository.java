package com.codestates.seb41_main_034.order;

import com.codestates.seb41_main_034.order.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Override
    @Query("select o from Order o left join fetch o.orderProducts op " +
            "where o.id = ?1 and o.isDeleted = false and op.isDeleted = false")
    Optional<Order> findById(Long id);

    @Query("select o.id from Order o " +
            "where o.createdBy = ?1 and cast(o.createdAt as LocalDate) between ?2 and ?3 and o.isDeleted = false")
    Page<Long> findIdByCreatedByAndYear(int createdBy, LocalDate from, LocalDate to, Pageable pageable);

    @Query("select distinct o from Order o left join fetch o.orderProducts op " +
            "where o.id in ?1 and o.isDeleted = false and op.isDeleted = false")
    List<Order> findAllById(Iterable<Long> ids, Sort sort);

}
