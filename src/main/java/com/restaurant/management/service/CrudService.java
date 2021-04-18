package com.restaurant.management.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface CrudService<T> {

    T create(T entity);

    List<T> create(List<T> entities);

    T update(T entity);

    void delete(T entity);

    void delete(String id);

    Boolean exists(String id);

    Optional<T> findById(String id);

    Page<T> listAll(Pageable pageable);

    List<T> listAll();

    void deleteAll();
}
