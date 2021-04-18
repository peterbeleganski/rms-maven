package com.restaurant.management.service;

import com.restaurant.management.exception.EntityNotFoundException;
import com.restaurant.management.model.Order;
import com.restaurant.management.model.Product;
import com.restaurant.management.model.dto.WaiterProduct;
import com.restaurant.management.repository.OrderRepository;
import com.restaurant.management.util.ObjectMapperUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class OrderService extends DefaultCrudService<Order> {

    private final ProductService productService;

    public OrderService(OrderRepository orderRepository, ProductService productService) {
        this.crudRepository = orderRepository;
        this.productService = productService;
    }

    @Override
    public Order create(Order entity) {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        String orderName = entity.getName();
        if (orderName == null) {
            orderName = "Order - " + LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
        }
        entity.setCreatedBy(authentication.getName());
        entity.setName(orderName);
        return super.create(entity);
    }

    public void archive(String orderId) {
        Order order = crudRepository.findById(orderId).orElseThrow();

        order.setArchived(true);
        crudRepository.save(order);
    }

    public Order addProductToOrder(String orderId, String productId, String quantity) {
        Order order = this.crudRepository.findById(orderId).orElseThrow();

        WaiterProduct product = ObjectMapperUtils.map(productService.findById(productId).orElseThrow(), WaiterProduct.class);

        Optional<WaiterProduct> optProductInOrder = order.getProducts()
                .stream()
                .filter(p -> p.getId().equals(productId))
                .findAny();

        if (optProductInOrder.isPresent()) {
            WaiterProduct productInOrder = optProductInOrder.get();

            productInOrder.setQuantity(productInOrder.getQuantity() + Integer.parseInt(quantity));
        } else {
            product.setQuantity(Integer.valueOf(quantity));
            order.getProducts().add(product);
        }

        return crudRepository.save(order);
    }

    public Order deleteProductFromOrder(String orderId, String productId) {
        Order order = this.crudRepository.findById(orderId).orElseThrow();

        if (productService.exists(orderId)) {
            throw new EntityNotFoundException("Product not found with id: "+ productId);
        }

        order.getProducts().removeIf(p -> p.getId().equals(productId));
        return crudRepository.save(order);
    }

    public Order addProductListToOrder(String orderId, List<Product> products) {
        Order order = this.crudRepository.findById(orderId).orElseThrow();

        List<WaiterProduct> fullProducts = products.stream().map(product -> {
            WaiterProduct productFromDb = ObjectMapperUtils.map(productService.findById(product.getId()).orElseThrow(), WaiterProduct.class);

            Optional<WaiterProduct> optFoundProductInOrder = order.getProducts()
                    .stream()
                    .filter(p -> p.getId().equals(productFromDb.getId()))
                    .findAny();

            if (optFoundProductInOrder.isPresent()) {
                WaiterProduct foundProduct = optFoundProductInOrder.get();
                foundProduct.setQuantity(foundProduct.getQuantity() + product.getQuantity());
                order.getProducts().removeIf(p -> p.getId().equals(foundProduct.getId()));
                return foundProduct;
            } else {
                productFromDb.setQuantity(product.getQuantity());
                return productFromDb;
            }
        }).collect(Collectors.toList());

        order.getProducts().addAll(fullProducts);

        return crudRepository.save(order);
    }

    public Order renameOrder(String orderId, String newName) {
        Order order = this.crudRepository.findById(orderId).orElseThrow();

        order.setName(newName);

        return this.crudRepository.save(order);
    }

    public Order createFromQrCode(List<Product> products) {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        String orderName = "Order - " + LocalDateTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss")).substring(0, 3);
        Order order = new Order();

        order.setName(orderName);
        order.setCreatedBy(authentication.getName());

        List<Product> foundProducts = productService.findAllByIds(products.stream().map(Product::getId).collect(Collectors.toList()));

        List<WaiterProduct> waiterProducts = ObjectMapperUtils.mapAll(foundProducts, WaiterProduct.class);

        for (int i = 0; i < products.size(); i++) {
            waiterProducts.get(i).setQuantity(products.get(i).getQuantity());
        }

        order.setProducts(waiterProducts);

        return crudRepository.save(order);
    }
}
