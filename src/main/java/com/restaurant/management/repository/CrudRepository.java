package com.restaurant.management.repository;

import com.restaurant.management.model.BaseObject;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CrudRepository<T extends BaseObject> extends MongoRepository<T, String> {

}
