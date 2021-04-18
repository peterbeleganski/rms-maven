package com.restaurant.management.repository;

import com.restaurant.management.model.Order;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends CrudRepository<Order> {
}
