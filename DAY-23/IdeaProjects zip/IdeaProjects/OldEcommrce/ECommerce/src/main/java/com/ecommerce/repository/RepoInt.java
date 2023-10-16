package com.ecommerce.repository;

import com.ecommerce.entity.model;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RepoInt extends JpaRepository<model,Integer> {
}
