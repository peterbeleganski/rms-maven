package com.restaurant.management.model.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserWithRestaurantDetails {

    private String id;
    private String username;
    private String password;
    private RestaurantResponse restaurant;
    @JsonIgnore
    private String restaurantId;
    private List<String> roles = new ArrayList<>();

}
