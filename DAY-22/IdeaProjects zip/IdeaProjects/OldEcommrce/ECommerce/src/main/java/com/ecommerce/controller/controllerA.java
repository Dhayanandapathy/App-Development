package com.ecommerce.controller;
import com.ecommerce.entity.model;
import com.ecommerce.service.ServiceA;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//@CrossOrigin("http://localhost:3000")
@RestController
//@RequestMapping("/api/learn")
public class controllerA{
    @Autowired
    ServiceA s1;
@GetMapping("/getAll")
public List<model> getDetails()
        {
        return s1.getDetails();
        }

        @PostMapping("/post")
public String postDetails(@RequestBody model m1)
        {
        return s1.postDetails(m1);
        }
@DeleteMapping("/delete/{id}")
public String deleteDetails(@PathVariable("id") int id)
        {
        return s1.deleteDetails(id);
        }


@PutMapping("/put/{id}")
public model updateDetails(@RequestBody model m)
        {
        return s1.updateDetails(m);
        }
}