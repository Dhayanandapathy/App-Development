package com.ecommerce.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name="offline")
public class Offline {
    @Id
    private String name;
    private String email;
    private long phonenumber;
    private String address;
    private String courses;

    public String getName() {
        return name;
    }

    public void setname(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email= email;
    }

    public long getPhonenumber() {
        return phonenumber;
    }

    public void setPhonenumber(long phonenumber) {
        this.phonenumber = phonenumber;
    }
    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }
    public String getCourses() {
        return courses;
    }

    public void setCourses(String courses) {
        this.courses = courses;
    }

    public Offline(String name, String email, long phonenumber,String address,String courses) {
        this.name = name;
        this.email = email;
        this.phonenumber = phonenumber;
        this.address=address;
        this.courses=courses;

    }
    public Offline(){

    }
}