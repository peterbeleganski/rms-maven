package com.restaurant.management.changelogs;

import com.github.cloudyrock.mongock.ChangeLog;
import com.github.cloudyrock.mongock.ChangeSet;
import com.restaurant.management.repository.UserRepository;

@ChangeLog
public class DatabaseChangeLog {

    @ChangeSet(order = "001", id="test migration", author = "Peter")
    public void seedRestaurantWithUser(UserRepository userRepository) {
        System.out.println("Testing migration framework");
    }

}
