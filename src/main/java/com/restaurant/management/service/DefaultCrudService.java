package com.restaurant.management.service;

import com.restaurant.management.model.BaseObject;
import com.restaurant.management.repository.CrudRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

@Slf4j
public abstract class DefaultCrudService <T extends BaseObject> implements CrudService<T> {

    @Autowired
    protected CrudRepository<T> crudRepository;

    @Override
    public Optional<T> findById(String id) {
        return crudRepository.findById(id);
    }

    @Override
    public T create(T entity) {
        return crudRepository.save(entity);
    }

    @Override
    public List<T> create(List<T> entities) {
        return crudRepository.insert(entities);
    }

    @Override
    public T update(T entity) {
        return crudRepository.save(entity);
    }

    @Override
    public void delete(T entity) {
        crudRepository.delete(entity);
    }

    @Override
    public void delete(String id) {
        crudRepository.deleteById(id);
    }

    @Override
    public Boolean exists(String id) {
        return crudRepository.existsById(id);
    }

    @Override
    public Page<T> listAll(Pageable pageable) {
        return crudRepository.findAll(pageable);
    }

    @Override
    public List<T> listAll() {
        return crudRepository.findAll();
    }

    @Override
    public void deleteAll() {
        crudRepository.deleteAll();
    }
}
