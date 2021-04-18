package com.restaurant.management.service.security;

import com.restaurant.management.exception.EntityNotFoundException;
import com.restaurant.management.model.Restaurant;
import com.restaurant.management.model.dto.RestaurantResponse;
import com.restaurant.management.model.dto.UserWithRestaurantDetails;
import com.restaurant.management.model.security.AuthenticationRequest;
import com.restaurant.management.repository.UserRepository;
import com.restaurant.management.service.RestaurantService;
import com.restaurant.management.util.ObjectMapperUtils;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Log4j2
public class UserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RestaurantService restaurantService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        com.restaurant.management.model.User foundUser = userRepository.findByUsername(username).orElseThrow();
        List<GrantedAuthority> authorities = new ArrayList<>();
        foundUser.getRoles().forEach(role -> authorities.add((GrantedAuthority) () -> role));
        return new User(foundUser.getUsername(), foundUser.getPassword(), authorities);
    }

    public String getRestaurantIdByUsername(String username) {
        com.restaurant.management.model.User foundUser = userRepository.findByUsername(username).orElseThrow();
        return foundUser.getRestaurantId();
    }

    public com.restaurant.management.model.User addUser(AuthenticationRequest request, List<String> roles) {
        log.info("adding new user to DB");
        com.restaurant.management.model.User user = new com.restaurant.management.model.User();
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        if (request.getRestaurantId() != null) {
            user.setRestaurantId(request.getRestaurantId());
        }
        if (roles != null) {
            List<String> preparedRoles = roles.stream().map(role -> "ROLE_" + role).collect(Collectors.toList());
            user.setRoles(preparedRoles);
        }

        com.restaurant.management.model.User savedUser = userRepository.save(user);

        updateRestaurantBySettingItsOwnerOrWaiter(request, roles, savedUser);

        return savedUser;
    }

    public List<UserWithRestaurantDetails> getAllUsers() {
        log.info("fetching all users from DB");
        List<UserWithRestaurantDetails> usersWithRestaurantDetails =
                ObjectMapperUtils.mapAll(this.userRepository.findAll(), UserWithRestaurantDetails.class);

        usersWithRestaurantDetails.stream().filter(u -> u.getRestaurantId() != null).forEach(user -> {
            this.restaurantService.findById(user.getRestaurantId()).ifPresent(restaurant -> {
                user.setRestaurant(ObjectMapperUtils.map(restaurant, RestaurantResponse.class));
            });
        });

        return usersWithRestaurantDetails;
    }

    public void deleteUserById(String userId) {
        log.info("deleting user with id: " + userId);
        var user = userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("User with id not found: " + userId));

        String restaurantId = user.getRestaurantId();

        // updating the restaurants that contain that user
        if (restaurantId != null) {
            this.restaurantService.findById(restaurantId).ifPresent(restaurant -> {
                if (restaurant.getOwner() != null && restaurant.getOwner().getId().equals(userId)) {
                    restaurant.setOwner(null);
                }
                restaurant.getWaiters().removeIf(waiter -> waiter.getId().equals(userId));
                restaurantService.update(restaurant);
            });
        }

        this.userRepository.deleteById(userId);
    }

    private void updateRestaurantBySettingItsOwnerOrWaiter(AuthenticationRequest request, List<String> roles, com.restaurant.management.model.User savedUser) {
        if (roles != null && roles.contains("OWNER")) {
            Restaurant restaurant = restaurantService.findById(request.getRestaurantId())
                    .orElseThrow(() -> new RuntimeException("Trying to add owner to a restaurant that does not exists"));

            restaurant.setOwner(savedUser);
            restaurantService.update(restaurant); // refactor it -> could be done with patch request here
        }

        if (roles != null && roles.contains("WAITER")) {
            Restaurant restaurant = restaurantService.findById(request.getRestaurantId())
                    .orElseThrow(() -> new RuntimeException("Trying to add owner to a restaurant that does not exists"));

            restaurant.getWaiters().add(savedUser);
            restaurantService.update(restaurant); // refactor it -> could be done with patch request here
        }
    }
}
