package com.restaurant.management.repository;

import com.restaurant.management.model.Category;
import com.restaurant.management.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends CrudRepository<Product> {

    Page<Product> findAllByRestaurantId(String restaurantId, Pageable pageable);

    Page<Product> findAllByRestaurantIdAndTitleIgnoreCaseLikeOrRestaurantIdAndCategoryIgnoreCaseLike(String restaurantId, String title, String id, String category, Pageable pageable);

    Page<Product> findByCategory(Category category, Pageable pageable);
}
