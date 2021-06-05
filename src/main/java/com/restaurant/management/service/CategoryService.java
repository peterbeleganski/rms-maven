package com.restaurant.management.service;

import com.google.common.collect.Lists;
import com.restaurant.management.model.Category;
import com.restaurant.management.model.Restaurant;
import com.restaurant.management.repository.CategoryRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

@Service
public class CategoryService extends DefaultCrudService<Category> {

    private final CategoryRepository categoryRepository;

    private final RestaurantService restaurantService;

    public CategoryService(CategoryRepository categoryRepository, RestaurantService restaurantService) {
        this.categoryRepository = categoryRepository;
        this.restaurantService = restaurantService;
    }

    public Category createCategory(String restaurantId, Category category) {
        Restaurant foundRestaurant = this.restaurantService.findById(restaurantId)
                .orElseThrow();

        Category savedCategory = categoryRepository.save(category);

        foundRestaurant.getCategories().add(category);
        restaurantService.update(foundRestaurant);

        return savedCategory;
    }

    public List<Category> findCategoriesByRestaurantId(String restaurantId) {
        Restaurant foundRestaurant = this.restaurantService.findById(restaurantId)
                .orElseThrow();

        foundRestaurant.getCategories().sort(Comparator.comparingInt(Category::getPriority));
        return foundRestaurant.getCategories();
    }

    public List<Category> updateCategories(List<Category> categories) {
        return categoryRepository.saveAll(categories);
    }
}
