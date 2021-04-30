package com.restaurant.management.model;

import com.restaurant.management.config.util.CollectionNames;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = CollectionNames.RESTAURANTS)
public class Restaurant extends BaseObject {

    private String name;

    @DBRef
    private List<Order> orders = new ArrayList<>();

    private String coverImageUrl;

    private String coverImage;

    private String logoImageUrl;

    private String logoImage;

    @DBRef
    private User owner;

    @DBRef
    private List<User> waiters = new ArrayList<>();

    @DBRef
    private List<Product> products = new ArrayList<>();

    private String location;

    private List<String> menus = new ArrayList<>();

    @DBRef
    private List<Category> categories = new ArrayList<>();

    private boolean active;
}
