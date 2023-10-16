package com.ecommerce.controller;

import com.ecommerce.entity.Language;
import com.ecommerce.service.LanguageService;
import com.ecommerce.service.ServiceA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

    @RestController
    @RequestMapping("/api/learnlanguage")
    public class LanguageController{
        @Autowired
        LanguageService s1;
        @GetMapping("/getAlll")
        public List<Language> getDetails()
        {

            return s1.getDetails();
        }

        @PostMapping("/postt")
        public String postDetails(@RequestBody Language m1)
        {
            return s1.postDetails(m1);
        }
        @DeleteMapping("/deletess/{id}")
        public String deleteDetails(@PathVariable("id") int id)
        {
            return s1.deleteDetails(id);
        }


        @PutMapping("/putt/{id}")
        public Language updateDetails(@RequestBody Language m)
        {
            return s1.updateDetails(m);
        }
    }

