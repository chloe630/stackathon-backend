package com.chloe.database;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import java.util.ArrayList;
import java.util.List;

@Entity
public class User {

    @Id
    private String name;
    private String email;
    private String password;
    private ArrayList<String> favoriteDrinks;

    protected User() {}

    public User(String name, String email, String password) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.favoriteDrinks = new ArrayList<String>();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public ArrayList<String> getFavoriteDrinks() {
        return favoriteDrinks;
    }

    public void setFavoriteDrinks(ArrayList<String> favoriteDrinks) {
        this.favoriteDrinks = favoriteDrinks;
    }
}