package com.ecommerce.repository;

import com.ecommerce.entity.Offline;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OfflineRepoInt extends JpaRepository<Offline,Integer> {
        }