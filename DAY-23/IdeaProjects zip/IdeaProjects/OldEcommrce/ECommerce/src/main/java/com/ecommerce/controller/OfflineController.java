package com.ecommerce.controller;

import com.ecommerce.entity.Offline;
import com.ecommerce.service.OfflineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/learns")
public class OfflineController {

    @Autowired
    OfflineService os;
    @GetMapping("/getoffline")
    public List<Offline> getDetails()
    {

        return os.getDetails();
    }

    @PostMapping("/postoffline")
    public String postDetailss(@RequestBody Offline f)
    {
        return os.postDetails(f);
    }

    @DeleteMapping("/deleteoffline/{id}")
    public String deleteDetails(@PathVariable("id") int id)
    {
        return os.deleteDetails(id);
    }


    @PutMapping("/putoffline/{id}")
    public Offline updateDetails(@RequestBody Offline f)
    {
        return os.updateDetails(f);
}
}