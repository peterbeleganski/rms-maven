package com.restaurant.management.controller;

import com.restaurant.management.exception.EntityNotFoundException;
import com.restaurant.management.exception.EntityNotProcessableException;
import com.restaurant.management.model.Order;
import com.restaurant.management.model.Product;
import com.restaurant.management.service.OrderService;
import com.restaurant.management.service.RestaurantService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@AllArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "/api/order", produces = MediaType.APPLICATION_JSON_VALUE)
public class OrderController extends CrudController<Order> {

    private final RestaurantService restaurantService;

    private final OrderService orderService;

    @GetMapping(path = "/all")
    public HttpEntity<List<Order>> list(@RequestParam String restaurantId) {
        log.info("fetching all orders from DB");
        return ResponseEntity.ok(restaurantService.getAllOrdersForRestaurant(restaurantId));
    }

    @PostMapping(path = "/{restaurantId}/")
    public HttpEntity<Order> create(@PathVariable String restaurantId, @RequestBody Order entity) {
        if (!restaurantService.exist(restaurantId)) {
            throw new EntityNotFoundException("restaurant with id: " + restaurantId + " not found!" );
        }
        log.info("creating new order for restaurant " + restaurantId);
        Order createdOrder = crudService.create(entity);
        restaurantService.addOrderToRestaurant(restaurantId, createdOrder);
        return ResponseEntity.ok(createdOrder);
    }

    @PostMapping(path = "/{restaurantId}/create-from-qr-code")
    public HttpEntity<Order> createFromQrCode(@PathVariable String restaurantId, @RequestBody List<Product> products) {
        if (!restaurantService.exist(restaurantId)) {
            throw new EntityNotFoundException("restaurant with id: " + restaurantId + " not found!" );
        }

        log.info("creating new order for restaurant " + restaurantId);
        Order createdOrder = orderService.createFromQrCode(products);
        restaurantService.addOrderToRestaurant(restaurantId, createdOrder);
        return ResponseEntity.ok(createdOrder);
    }

    @PostMapping(path = "/{orderId}/archive")
    public HttpEntity<?> archive(@PathVariable String orderId) {
        orderService.archive(orderId);
        return ResponseEntity.noContent().build();
    }

    @PostMapping(path = "/{orderId}/add-product/{productId}")
    public HttpEntity<Order> addProductToOrder(@PathVariable String orderId, @PathVariable String productId, @RequestParam String quantity) {
        Order updatedOrder = orderService.addProductToOrder(orderId, productId, quantity);

        return ResponseEntity.ok(updatedOrder);
    }

    @PostMapping(path = "/{orderId}/add-product-list")
    public HttpEntity<Order> addProductListToOrder(@PathVariable String orderId, @RequestBody List<Product> products) {
        Order order = orderService.addProductListToOrder(orderId, products);

        return ResponseEntity.ok(order);
    }

    @PostMapping(path = "/{orderId}/rename")
    public HttpEntity<Order> renameOrder(@PathVariable String orderId, @RequestParam String name) {
        Order order = orderService.renameOrder(orderId, name);

        return ResponseEntity.ok(order);
    }

    @PostMapping(path = "/{orderId}/delete-product/{productId}")
    public HttpEntity<Order> deleteProductFromOrder(@PathVariable String orderId, @PathVariable String productId) {
        Order updatedOrder = orderService.deleteProductFromOrder(orderId, productId);

        return ResponseEntity.ok(updatedOrder);
    }

    @Override
    @GetMapping(path = "/{orderId}")
    public HttpEntity<?> findById(@PathVariable String orderId) throws EntityNotFoundException {
        return super.findById(orderId);
    }

    @Override
    @PutMapping(path = "/{orderId}")
    public HttpEntity<Order> update(@PathVariable String orderId, @RequestBody Order entity) throws EntityNotProcessableException, EntityNotFoundException {
        return super.update(orderId, entity);
    }

    @Override
    @DeleteMapping(path = "/{orderId}")
    public HttpEntity<?> delete(@PathVariable String orderId) throws EntityNotFoundException {
        return super.delete(orderId);
    }
}
