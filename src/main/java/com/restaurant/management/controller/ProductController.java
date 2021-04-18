package com.restaurant.management.controller;

import com.restaurant.management.exception.EntityNotProcessableException;
import com.restaurant.management.model.Product;
import com.restaurant.management.service.ProductService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@AllArgsConstructor
@RestController
@Slf4j
@RequestMapping(path = "/api/product")
public class ProductController extends CrudController<Product> {

    private final ProductService productService;

    @PostMapping(path = "/{productId}/upload-image")
    public HttpEntity<?> uploadImage(@PathVariable String productId, @RequestParam("file") MultipartFile file) throws IOException {
        log.info("uploading image to product: " + productId);
        productService.addImageToProduct(productId, file);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(path = "/all")
    public HttpEntity<Page<Product>> getProductsForRestaurant(@RequestParam String restaurantId,
                                                              @RequestParam String page,
                                                              @RequestParam String size,
                                                              @RequestParam(required = false) String searchTerm) {
        return ResponseEntity.ok(productService.getProductsForRestaurant(restaurantId, PageRequest.of(Integer.parseInt(page), Integer.parseInt(size)), searchTerm));
    }

    @PutMapping(path = "/{productId}")
    public HttpEntity<Product> update(@PathVariable String productId, @RequestBody Product product) throws EntityNotProcessableException {
        return super.update(productId, product);
    }

    @DeleteMapping(path = "/{productId}")
    public HttpEntity<?> remove(@PathVariable String productId) {
        Product product = productService.findById(productId).orElseThrow();
        productService.deleteProduct(product);
        return ResponseEntity.noContent().build();
    }

    @GetMapping(path = "/{productId}")
    public HttpEntity<?> findById(@PathVariable String productId) {
        return super.findById(productId);
    }

    @GetMapping(path = "/count")
    public HttpEntity<?> getCountOfProducts() {
        return ResponseEntity.ok(productService.getCount());
    }

    @GetMapping(path = "/find-by-ids")
    public HttpEntity<List<Product>> getProductsByIds(@RequestParam List<String> ids) {
        return ResponseEntity.ok(productService.findAllByIds(ids));
    }

    @PostMapping("/{restaurantId}/import-products")
    public HttpEntity importProducts(@PathVariable String restaurantId, @RequestParam MultipartFile importFile) {
        int importedProductsCount = productService.importProducts(restaurantId, importFile);
        return ResponseEntity.ok(importedProductsCount);
    }
}
