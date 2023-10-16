package com.ecommerce.repository;

import java.util.List;
import java.util.Optional;

import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ecommerce.entity.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String username);

    User findByUid(Long uid);

    void deleteByUid(Long uid);

    @Transactional
    @Query(value="select * from _user",nativeQuery = true)
    public List<User> getAllUsers();

    @Modifying
    @Transactional
    @Query(value="delete from _user where id = ?1",nativeQuery = true)
    public void deleteUser(int id);

}