package com.ecommerce.service;

import com.ecommerce.entity.Offline;
import com.ecommerce.repository.OfflineRepoInt;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class OfflineService {
    @Autowired
    OfflineRepoInt or;

    public List<Offline> getDetails()
    {
        return or.findAll();
    }

    public String postDetails(Offline f)
    {
        or.save(f);
        return "Details are saved";
    }
    public String deleteDetails(@PathVariable("id") int id)
    {
        or.deleteById(id);
        return "Id : "+id+" is deleted";
    }

    public Offline updateDetails(@RequestBody Offline f)
    {
        System.out.println("Changes updated");
        return or.save(f);
}


}