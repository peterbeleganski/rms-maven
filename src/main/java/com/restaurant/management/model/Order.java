package com.restaurant.management.model;

import com.restaurant.management.config.util.CollectionNames;
import com.restaurant.management.model.dto.WaiterProduct;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Document(collection = CollectionNames.ORDERS)
public class Order extends BaseObject {

    private String name;

    private List<WaiterProduct> products = new ArrayList<>();

    private boolean archived;

    private String createdBy;
}
