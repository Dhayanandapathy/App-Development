package com.ecommerce.controller;

import com.ecommerce.entity.Letter;
import com.ecommerce.service.LetterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/learns")
public class LetterController{
    @Autowired
    LetterService s1;
    @GetMapping("/getAllf")
    public List<Letter> getDetails()
    {

        return s1.getDetails();
    }

    @PostMapping("/post")
    public String postDetailss(@RequestBody Letter m1)
    {
        return s1.postDetails(m1);
    }
    @DeleteMapping("/deleted/{id}")
    public String deleteDetails(@PathVariable("id") int id)
    {
        return s1.deleteDetails(id);
    }


    @PutMapping("/puted/{id}")
    public Letter updateDetails(@RequestBody Letter m)
    {
        return s1.updateDetails(m);
    }
}

