package com.ecommerce.repository;


import com.ecommerce.entity.Language;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LanguageRepoInt extends JpaRepository<Language,Integer> {
}
