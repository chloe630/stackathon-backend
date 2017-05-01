package com.chloe;

import com.chloe.database.RecipeRepository;
import com.chloe.database.User;
import com.chloe.database.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StackathonApplication implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RecipeRepository recipeRepository;

	public static void main(String[] args) {
		SpringApplication.run(StackathonApplication.class, args);
	}

    @Override
    public void run(String... args) throws Exception {
//        this.userRepository.save(new User("mocha chung", "mocha chung", "mocha@meow.com", "1234"));
//        this.userRepository.save(new User("chloe choi", "chloe choi", "chloe@meow.com", "1234"));

    }
}
