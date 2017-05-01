package com.chloe.database;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Entity;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.ArrayList;

@Entity
public class User {

    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    @Column(length = 10000)
    private ArrayList<Object> favoriteDrinks;

    protected User() {}

    public User(String id, String name, String email, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.favoriteDrinks = new ArrayList<Object>();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public ArrayList<Object> getFavoriteDrinks() {
        return favoriteDrinks;
    }

    public void setFavoriteDrinks(ArrayList<Object> favoriteDrinks) {
        this.favoriteDrinks = favoriteDrinks;
    }
}