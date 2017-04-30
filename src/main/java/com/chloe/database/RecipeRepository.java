package com.chloe.database;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "recipes", path = "recipes")
public interface RecipeRepository extends PagingAndSortingRepository<Recipe, String> {

    List<Recipe> findAll();

    Recipe findRecipeByName(@Param("name") String name);

    Recipe findRecipeById(@Param("id") String id);

}
