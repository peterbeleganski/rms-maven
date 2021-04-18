package com.restaurant.management.model.dto;

import lombok.Data;

@Data
public class RestaurantPatchUpdateDto {

    private String name;

    private String location;

    private byte[] image;

    private String contentType;

    private boolean active;
}
