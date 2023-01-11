package com.codestates.seb41_main_034.order.repository;

import com.codestates.seb41_main_034.order.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query("select o.id from Order o where o.createdBy = ?1 and year(o.createdAt) = ?2")
    Page<Long> findIdByCreatedByAndYear(int createdBy, int year, Pageable pageable);

    @Query("select o from Order o left join fetch o.orderProducts where o.id in ?1")
    List<Order> findAllById(List<Long> ids, Sort sort);

}
