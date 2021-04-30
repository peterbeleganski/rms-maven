package com.restaurant.management.model;

import com.restaurant.management.config.util.CollectionNames;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.validation.constraints.Positive;
import javax.validation.constraints.Size;
import java.math.BigDecimal;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = CollectionNames.PRODUCTS)
public class Product extends BaseObject {

    @Size(min = 2, max = 40)
    private String title;

    @Positive
    private BigDecimal price;

    @Positive
    private Integer quantity;

    @Size(max = 200)
    private String description;

    @Size(max = 200)
    private List<String> allergens;

    private String imageUrl;

    private String imageBlobUrl;

    private String contentType;

    private List<String> tags;

    private List<String> menus;

    private String restaurantId;

    @DBRef
    private Category category;
}
