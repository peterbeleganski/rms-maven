package com.restaurant.management.model;

import com.restaurant.management.config.util.CollectionNames;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
@Document(collection = CollectionNames.USERS)
@AllArgsConstructor
@NoArgsConstructor
public class User extends BaseObject {

    private String username;

    private String password;

    // would be used only for waiters and owners of the restaurant
    private String restaurantId;

    private List<String> roles = new ArrayList<>();
}
