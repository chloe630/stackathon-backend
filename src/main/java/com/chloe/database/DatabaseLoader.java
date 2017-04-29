package com.chloe.database;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.util.ArrayList;

@Component
public class DatabaseLoader implements CommandLineRunner {

    private final UserRepository repository;

    @Autowired
    public DatabaseLoader(UserRepository repository) {
        this.repository = repository;
    }

    public void run(String... strings) throws Exception {
        this.repository.save(new User("President Obama", "obama@email.com", "1234", new ArrayList<String>()));

    }
}