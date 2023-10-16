package com.ecommerce.entity;

import jakarta.persistence.*;

import java.sql.Timestamp;
import java.util.Date;

@Entity
@Table(name="learning")
public class model {
    @Id
    private int id;
    private String username;
    private String password;


//    @ManyToOne
//    @JoinColumn(name = "uid")
//    private User user;




    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword (String password) {
        this.password = password;
    }


    public model(int id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
    public model() {

    }
}
