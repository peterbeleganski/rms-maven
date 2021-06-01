package com.restaurant.management.changelogs;

import com.github.cloudyrock.mongock.ChangeLog;
import com.github.cloudyrock.mongock.ChangeSet;
import com.restaurant.management.model.Restaurant;
import com.restaurant.management.repository.RestaurantRepository;
import com.restaurant.management.repository.UserRepository;

import java.util.List;

@ChangeLog
public class DatabaseChangeLog {

    @ChangeSet(order = "001", id="test migration", author = "Peter")
    public void seedRestaurantWithUser(UserRepository userRepository) {
        System.out.println("Testing migration framework");
    }

    @ChangeSet(order = "002", id="add_working_hours_to_restaurant", author = "Peter")
    public void addWorkingHoursProperty(RestaurantRepository restaurantRepository) {

        List<Restaurant> allRestaurants = restaurantRepository.findAll();
        allRestaurants.forEach(restaurant -> restaurant.setWorkingHours("Работно време: 10:00 - 22:00"));

        restaurantRepository.saveAll(allRestaurants);
    }

}
