package com.codestates.seb41_main_034.useraddress;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface UserAddressRepository extends JpaRepository<UserAddress, Long> {

    @Override
    @Query("select ua from UserAddress ua where ua.id = ?1 and ua.isDeleted = false")
    Optional<UserAddress> findById(Long id);

    @Query("select ua from UserAddress ua where ua.createdBy = ?1 and ua.isDeleted = false")
    List<UserAddress> findByCreatedBy(int createdBy);

}
