package com.restaurant.management.controller;

import com.restaurant.management.model.Category;
import com.restaurant.management.service.CategoryService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@AllArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "/api/category")
public class CategoryController extends CrudController<Category> {

    private final CategoryService categoryService;

    @PostMapping(path = "/create")
    public HttpEntity<Category> create(@RequestBody Category entity, @RequestParam String restaurantId) {
        log.info("Creating new category: {} for restaurantId: {}", entity.getTitle(), restaurantId);

        return ResponseEntity.ok(categoryService.createCategory(restaurantId, entity));
    }

    @GetMapping(path = "")
    public HttpEntity<List<Category>> getCategoriesForRestaurant(@RequestParam String restaurantId) {
        return ResponseEntity.ok(categoryService.findCategoriesByRestaurantId(restaurantId));
    }

    @PutMapping(path = "")
    public HttpEntity<List<Category>> updateCategories(@RequestBody List<Category> categories) {
        return ResponseEntity.ok(categoryService.updateCategories(categories));
    }

}
