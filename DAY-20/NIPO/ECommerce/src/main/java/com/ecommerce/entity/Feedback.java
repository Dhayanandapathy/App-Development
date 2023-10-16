package com.ecommerce.entity;

import jakarta.persistence.*;

@Entity
@Table(name="feedback")
public class Feedback {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String email;
    private String message;
    private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    public String getName(){
        return name;
    }
    public void setName(String name){
        this.name=name;
    }

    public Feedback() {
    }

    public Feedback(String email, String message) {
        this.email = email;
        this.message = message;
    }
}