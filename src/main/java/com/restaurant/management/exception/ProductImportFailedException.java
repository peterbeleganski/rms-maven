package com.restaurant.management.exception;

public class ProductImportFailedException extends RuntimeException {

    public ProductImportFailedException() {}

    public ProductImportFailedException(String message) {
        super(message);
    }
}
