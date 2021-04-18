package com.restaurant.management.model.dto;

import com.restaurant.management.model.Category;
import lombok.Data;

import java.util.List;

@Data
public class ListRestaurantNamesDto {

    private String id;

    private String name;

    private List<Category> categories;
}
