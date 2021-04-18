package com.restaurant.management.repository;

import com.restaurant.management.model.Category;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepository extends CrudRepository<Category> {
}
