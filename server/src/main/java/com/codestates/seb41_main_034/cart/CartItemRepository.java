package com.codestates.seb41_main_034.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    @Query("select c from CartItem c where c.userId = ?1 and c.isDeleted = false")
    List<CartItem> findByUserId(int userId);

    @Override
    @Query("select c from CartItem c where c.id = ?1 and c.isDeleted = false")
    Optional<CartItem> findById(Long id);

    @Query("select c from CartItem c where c.userId = ?1 and c.productId = ?2 and c.isDeleted = false")
    Optional<CartItem> findByUserIdAndProductId(int userId, int productId);

}
