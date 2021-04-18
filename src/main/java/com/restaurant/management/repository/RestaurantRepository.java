package com.restaurant.management.repository;

import com.restaurant.management.model.Restaurant;
import com.restaurant.management.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepository extends CrudRepository<Restaurant> {

    Page<Restaurant> findAllByNameIgnoreCaseLikeOrLocationIgnoreCaseLike(String name, String location, Pageable pageable);

    Page<Restaurant> findAllByOwnerAndNameIgnoreCaseLikeOrOwnerAndLocationIgnoreCaseLike(User u, String name, User u1, String location, Pageable pageable);

    Page<Restaurant> findAllByNameIgnoreCaseLikeAndActiveTrueOrLocationIgnoreCaseLikeAndActiveTrue(String name, String location, Pageable pageable);

    Page<Restaurant> findAll(Pageable pageable);
}
