package com.restaurant.management.model;

import com.restaurant.management.config.util.CollectionNames;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = CollectionNames.CATEGORIES)
public class Category extends BaseObject {

    private int priority;

    private String title;

}
