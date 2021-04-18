package com.restaurant.management.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public abstract class BaseObject {

    @Id
    protected String id;
}
