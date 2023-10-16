package com.ecommerce.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="letter")
public class Letter {
    @Id
    private int id;
    private String letter;
    private String option1;
    private String option2;
    private String option3;
    private String correct;
    private String image;



    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getLetter() {
        return letter;
    }

    public void setLetter(String letter) {
        this.letter = letter;
    }

    public String getOption1() {
        return option1;
    }

    public void setOption1 (String option1) {
        this.option1 = option1;}
    public String getOption2() {return option2;}

    public void setOption2(String option2) {
        this.option2 = option2;}
    public String getCorrect() {return correct;}

    public void setCorrect(String correct) {
        this.correct = correct;}
    public String getOption3(){return option3;}

    public void setOption3(String option3) {
        this.option3=option3;}
    public String getImage(){
        return image;
    }
    public void setImage(String image)
    {
        this.image=image;
    }

    public Letter(int id, String letter, String option1,String option2,String option3,String correct,String image) {
        this.id = id;
        this.letter = letter;
        this.option1 = option1;
        this.option2 = option2;
        this.option3= option3;
        this.correct=correct;
        this.image=image;
    }
    public Letter() {

    }
}


