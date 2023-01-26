package com.codestates.seb41_main_034.user.repository;

import com.codestates.seb41_main_034.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findById(long userId);

    Optional<User> findByusername(String username);


}
