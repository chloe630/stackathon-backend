package com.chloe.database;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;

@Entity
public class Recipe implements Serializable{

    @Id
    private String id;
    private String name;
    private String content;
    private String image;
    private int rating = 0;

    protected Recipe() {};

    public Recipe(String id, String name, String content, String image) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.image = image;
    }

    public Recipe(String id, String name, String content, String image, int rating) {
        this.id = id;
        this.name = name;
        this.content = content;
        this.image = image;
        this.rating = rating;
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

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
