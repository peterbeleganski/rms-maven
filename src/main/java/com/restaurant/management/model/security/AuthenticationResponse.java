package com.restaurant.management.model.security;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String username;

    private String jwt;

    private List<String> authorities;

    private boolean isAuthenticated;

    private String restaurantId;
}
