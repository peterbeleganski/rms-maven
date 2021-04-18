package com.restaurant.management.exception;

import com.restaurant.management.exception.dto.Error;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ResponseExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(BadCredentialsException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Error badCredentials(BadCredentialsException exception) {
        return new Error(exception.getMessage());
    }

    @ExceptionHandler(NoSuchProductException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Error productDoesNotExist(NoSuchProductException exception) {
        return new Error(exception.getMessage());
    }

    @ExceptionHandler(EntityNotFoundException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public Error entityDoesNotExist(EntityNotFoundException exception) {
        return new Error(exception.getMessage());
    }

    @ExceptionHandler(EntityNotProcessableException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Error entityNotProcessable(EntityNotProcessableException exception) {
        return new Error(exception.getMessage());
    }

    @ExceptionHandler(DuplicateKeyException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    public Error invalidUserData(DuplicateKeyException exception) {
        return new Error(exception.getMessage());
    }

    @ExceptionHandler(MissingRequiredAuthoritiesException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public Error missingRequiredAuthorities(MissingRequiredAuthoritiesException exception) {
        return new Error(exception.getMessage());
    }

    @ExceptionHandler(RuntimeException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Error internalError(RuntimeException exception) {
        return new Error(exception.getMessage());
    }

    @ExceptionHandler(ProductImportFailedException.class)
    @ResponseBody
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public Error handleProductImportFailed(ProductImportFailedException exception) {
        return new Error(exception.getMessage());
    }
}
