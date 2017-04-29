package com.chloe.database;

import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import java.util.ArrayList;

@Data
@Entity
public class User {

    private @Id @GeneratedValue Long id;
    private String name;
    private String email;
    private String password;
    private ArrayList<String> favoriteDrinks;

    private User() {}

    public User(String name, String email, String password, ArrayList<String> favoriteDrinks) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.favoriteDrinks = favoriteDrinks;
    }
}