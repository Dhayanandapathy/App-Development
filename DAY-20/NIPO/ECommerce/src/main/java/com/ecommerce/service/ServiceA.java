package com.ecommerce.service;

import com.ecommerce.entity.model;
import com.ecommerce.repository.RepoInt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
@Service
public class ServiceA {
    @Autowired
    RepoInt r1;

    public List<model> getDetails()
    {
        return r1.findAll();
    }

    public String postDetails(model m1)
    {
        System.out.println(m1);
        r1.save(m1);
        return "Details are saved";
    }
    public String deleteDetails(@PathVariable("id") int id)
    {
        r1.deleteById(id);
        return "Id : "+id+" is deleted";
    }

    public model updateDetails(@RequestBody model t)
    {
        System.out.println("Changes updated");
        return r1.save(t);
    }


}

