package com.chloe.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import java.util.ArrayList;

@Component
public class DatabaseLoader implements ApplicationRunner {

    private final UserRepository userRepository;
    private final RecipeRepository recipeRepository;

    @Autowired
    public DatabaseLoader(UserRepository userRepository, RecipeRepository recipeRepository) {
        this.userRepository = userRepository;
        this.recipeRepository = recipeRepository;
    }

    public void run(ApplicationArguments args) throws Exception {

//        Recipe mojito = new Recipe("Mojito", "1. mint 2. more mint 3. RUM", "http://placegoat.com/200/200");
//        Recipe sake = new Recipe("Sake", "Just drink whatever. why bother", "http://placegoat.com/200/200");
//        Recipe martini = new Recipe("Martini", "1. something 2. something else 3. whateverrrrrr", "http://placegoat.com/200/200");
//        Recipe bloodyMary = new Recipe("Bloody Mary", "1. Blood 2. Mary 3. Yum..?","http://placegoat.com/200/200", 25);
//        Recipe cosmopolitan = new Recipe("Cosmopolitan", "1. get Cosmopolitan magazine 2. grind it 3. mix it with sake", "http://placegoat.com/200/200", 57);

//        ArrayList<Recipe> mochasRecipes = new ArrayList<>();
//        mochasRecipes.add(mojito);
//        mochasRecipes.add(sake);
        this.userRepository.save(new User("mocha chung", "mocha@meow.com", "1234"));

//        ArrayList<Recipe> chloesRecipes = new ArrayList<>();
//        mochasRecipes.add(martini);
//        mochasRecipes.add(mojito);
        this.userRepository.save(new User("chloe choi", "chloe@meow.com", "1234"));

//        this.recipeRepository.save(mojito);
//        this.recipeRepository.save(martini);
//        this.recipeRepository.save(sake);
//        this.recipeRepository.save(bloodyMary);
//        this.recipeRepository.save(cosmopolitan);
    }
}