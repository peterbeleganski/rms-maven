package com.restaurant.management.controller;

import com.restaurant.management.exception.EntityNotFoundException;
import com.restaurant.management.exception.EntityNotProcessableException;
import com.restaurant.management.model.BaseObject;
import com.restaurant.management.service.CrudService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.GenericTypeResolver;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

import java.text.MessageFormat;
import java.util.List;

@Slf4j
public abstract class CrudController<E extends BaseObject> {

    @Autowired
    protected CrudService<E> crudService;

    protected Class<E> entityClass;

    public CrudController() {
        this.entityClass = (Class<E>) GenericTypeResolver.resolveTypeArgument(getClass(), CrudController.class);
    }

    public HttpEntity<?> delete(@PathVariable String id) throws EntityNotFoundException {
        log.info("deleting entity {} with id {}", entityClass.getSimpleName(), id);

        crudService.findById(id).orElseThrow(() -> new EntityNotFoundException("Entity with id: {} not found"));

        crudService.delete(id);

        return ResponseEntity.noContent().build();
    }

    public Page<E> list(Pageable pageable) {
        log.info("list entities of type: {} ", entityClass.getSimpleName());

        return crudService.listAll(pageable);
    }

    public List<E> list() {
        log.info("list entities of type: {} ", entityClass.getSimpleName());

        return crudService.listAll();
    }

    public HttpEntity<E> create(E entity) {
        log.info("creating entity of type: {} ", entityClass.getSimpleName());
        E response = crudService.create(entity);
        return ResponseEntity.ok().body(response);
    }

    public HttpEntity<List<E>> create(List<E> entities) {
        log.info("creating entities of type: {} ", entityClass.getSimpleName());
        List<E> response = crudService.create(entities);
        return ResponseEntity.ok().body(response);
    }

    public HttpEntity<?> findById(String id) throws EntityNotFoundException {
        log.info("fetching entity of type {} with id: {}", entityClass.getSimpleName(), id);

        return crudService.findById(id).map(ResponseEntity::ok)
                .orElseThrow(() -> new EntityNotFoundException(MessageFormat.format("entity of type {0} with id: {1} not found",
                        entityClass.getSimpleName(), id)));
    }

    public HttpEntity<E> update(String id, E entity) throws EntityNotProcessableException, EntityNotFoundException {
        log.info("updating entity of type {} with id: {}", entityClass.getSimpleName(), id);
        if (!entity.getId().equals(id)) {
            throw new EntityNotProcessableException("Mismatch between endpoint (" + id + ") and the given entity's identifiers (" + entity.getId() + ")");
        }

        if (!crudService.exists(id)) {
            throw new EntityNotFoundException(MessageFormat.format("Error while updating entity with id: {0} ", id));
        }

        return ResponseEntity.ok().body(crudService.update(entity));
    }
}
