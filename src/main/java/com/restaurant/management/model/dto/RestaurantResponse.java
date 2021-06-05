package com.restaurant.management.model.dto;

import com.restaurant.management.model.Category;
import com.restaurant.management.model.User;
import lombok.Data;

import java.util.List;

@Data
public class RestaurantResponse {

    private String id;

    private String name;

    private String coverImageUrl;

    private String logoImageUrl;

    private String location;

    private List<User> waiters;

    private User owner;

    private List<Category> categories;

    private boolean active;

    private String workingHours;
}
