package com.restaurant.management.config;

import com.restaurant.management.model.User;
import com.restaurant.management.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class SampleDataInitializer {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    @EventListener(ApplicationReadyEvent.class)
    public void initializeAdminUser() {
        Optional<User> admin = this.userRepository.findByUsername("FROGADMIN");

        if (admin.isEmpty()) {
            User adminUser = new User();
            adminUser.setUsername("FROGADMIN");
            adminUser.setPassword(passwordEncoder.encode("FROGADMIN"));
            adminUser.setRoles(List.of("ROLE_ADMIN"));
            userRepository.save(adminUser);
        }
    }
}
