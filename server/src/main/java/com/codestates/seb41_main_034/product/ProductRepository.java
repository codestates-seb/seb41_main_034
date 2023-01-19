package com.codestates.seb41_main_034.product;

import com.codestates.seb41_main_034.product.entity.Product;
import com.codestates.seb41_main_034.product.entity.ProductCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Override
    @Query("select p from Product p where p.id = ?1 and p.isDeleted = false")
    Optional<Product> findById(Integer id);

    @Override
    @Query("select p from Product p where p.isDeleted = false")
    Page<Product> findAll(Pageable pageable);

    @Override
    @Query("select p from Product p where p.id in ?1 and p.isDeleted = false")
    List<Product> findAllById(Iterable<Integer> ids);

    @Query("select p from Product p where p.category = ?1 and p.isDeleted = false")
    Page<Product> findByCategory(ProductCategory category, Pageable pageable);

}
