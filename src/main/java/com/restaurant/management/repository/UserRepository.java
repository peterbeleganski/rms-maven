package com.restaurant.management.repository;

import com.restaurant.management.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends CrudRepository<User> {

    Optional<User> findByUsername(String username);
}
