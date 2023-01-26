package com.codestates.seb41_main_034.user.repository;

import com.codestates.seb41_main_034.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    @Override
    @Query("select u from USERS u where u.id = ?1 and u.isDeleted = false")
    Optional<User> findById(Long id);


    @Query("select u from USERS u where u.username = ?1 and u.isDeleted = false")
    Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);

}
