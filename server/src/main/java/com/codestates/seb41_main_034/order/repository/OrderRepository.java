package com.codestates.seb41_main_034.order.repository;

import com.codestates.seb41_main_034.order.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {

}
