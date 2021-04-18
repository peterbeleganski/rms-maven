package com.restaurant.management.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class WaiterProduct {

    private String id;

    private String title;

    private BigDecimal price;

    private Integer quantity;

    private String restaurantId;

}
