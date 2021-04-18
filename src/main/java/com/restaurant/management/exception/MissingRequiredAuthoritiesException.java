package com.restaurant.management.exception;

public class MissingRequiredAuthoritiesException extends RuntimeException{

    public MissingRequiredAuthoritiesException() {
        super();
    }

    public MissingRequiredAuthoritiesException(String message) {
        super(message);
    }

}
