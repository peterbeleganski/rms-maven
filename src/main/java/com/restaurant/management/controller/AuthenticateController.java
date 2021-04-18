package com.restaurant.management.controller;

import com.restaurant.management.exception.BadCredentialsException;
import com.restaurant.management.model.security.AuthenticationRequest;
import com.restaurant.management.model.security.AuthenticationResponse;
import com.restaurant.management.service.security.JwtService;
import com.restaurant.management.service.security.UserDetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
public class AuthenticateController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtService jwtService;

    @PostMapping(value = "/authenticate")
    public ResponseEntity<?> createToken(@RequestBody AuthenticationRequest request) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(), request.getPassword()));
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Bad credentials", e);
        }

        UserDetails userDetails = this.userDetailsService.loadUserByUsername(request.getUsername());

        List<String> authorities = userDetails.getAuthorities()
                .stream()
                .map(GrantedAuthority::getAuthority)
                .map(authority -> authority.substring(5))
                .collect(Collectors.toList());

        String restaurantIdBy = this.userDetailsService.getRestaurantIdByUsername(userDetails.getUsername());

        return ResponseEntity.ok(new AuthenticationResponse(userDetails.getUsername(), jwtService.generateToken(userDetails), authorities, true, restaurantIdBy));
    }

    @PostMapping(value = "/api/add-user")
    public ResponseEntity<?> addNewUser(@RequestBody AuthenticationRequest request, @RequestParam(required = false) List<String> roles) {
        return ResponseEntity.ok(userDetailsService.addUser(request, roles));
    }

    @PostMapping(value = "/api/register")
    public ResponseEntity<?> registerUser(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(userDetailsService.addUser(request, Collections.singletonList("USER")));
    }

    @GetMapping(value = "/api/all-users")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userDetailsService.getAllUsers());
    }

    @DeleteMapping(value = "/api/delete-user/{userId}")
    public ResponseEntity<?> deleteUserById(@PathVariable String userId) {
        userDetailsService.deleteUserById(userId);
        return ResponseEntity.ok().build();
    }
}
