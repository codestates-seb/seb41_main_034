package com.codestates.seb41_main_034.user.repository;

import com.codestates.seb41_main_034.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Override
    @Query("select u from User u where u.id = ?1 and u.isDeleted = false")
    Optional<User> findById(Integer id);

    @Override
    @Query("select u from User u where u.id in ?1 and u.isDeleted = false")
    List<User> findAllById(Iterable<Integer> ids);

    @Query("select u from User u where u.username = ?1 and u.isDeleted = false")
    Optional<User> findByUsername(String username);

    boolean existsByUsername(String username);

}
