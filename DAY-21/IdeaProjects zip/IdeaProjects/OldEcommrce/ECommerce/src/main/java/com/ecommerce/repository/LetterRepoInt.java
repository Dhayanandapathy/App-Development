package com.ecommerce.repository;

import com.ecommerce.entity.Letter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LetterRepoInt extends JpaRepository<Letter,Integer> {
}
