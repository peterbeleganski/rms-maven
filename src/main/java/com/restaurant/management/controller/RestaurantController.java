package com.restaurant.management.controller;

import com.restaurant.management.exception.EntityNotFoundException;
import com.restaurant.management.exception.EntityNotProcessableException;
import com.restaurant.management.model.Product;
import com.restaurant.management.model.Restaurant;
import com.restaurant.management.model.dto.ListRestaurantNamesDto;
import com.restaurant.management.model.dto.RestaurantPatchUpdateDto;
import com.restaurant.management.model.dto.RestaurantResponse;
import com.restaurant.management.service.RestaurantService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@AllArgsConstructor
@RestController
@RequestMapping(path = "/api/restaurant")
public class RestaurantController extends CrudController<Restaurant> {

    private final RestaurantService restaurantService;

    @GetMapping(path = "/all", produces= MediaType.APPLICATION_JSON_VALUE)
    public HttpEntity<Page<RestaurantResponse>> listRestaurants(@RequestParam(required = false) String ownerUsername,
                                                                @RequestParam(required = false) String searchTerm,
                                                                @RequestParam(required = false) String page,
                                                                @RequestParam(required = false) String size) {
        if (page == null || size == null) {
            return ResponseEntity.ok(restaurantService.getAllRestaurants(PageRequest.of(0, Integer.MAX_VALUE), searchTerm, ownerUsername));
        }

        return ResponseEntity.ok(restaurantService.getAllRestaurants(PageRequest.of(Integer.parseInt(page), Integer.parseInt(size)), searchTerm, ownerUsername));
    }


    @GetMapping(path = "/names")
    public HttpEntity<List<ListRestaurantNamesDto>> listRestaurantNames(@RequestParam(required = false) String ownerUsername) {
        return ResponseEntity.ok(restaurantService.getAllRestaurantNames(ownerUsername));
    }

    @GetMapping(path = "/all-extended")
    public HttpEntity<List<Restaurant>> listRestaurantsWithDetails() {
        return ResponseEntity.ok(super.list());
    }

    @Override
    @PostMapping(path = "/create")
    public HttpEntity<Restaurant> create(@RequestBody Restaurant entity) {
        return super.create(entity);
    }

    @PostMapping(path = "/{restaurantId}/upload-image")
    public HttpEntity<Restaurant> uploadImage(@PathVariable String restaurantId, @RequestParam("file") MultipartFile file, @RequestParam String imageType) throws IOException {
        return ResponseEntity.ok(restaurantService.addImageToRestaurant(restaurantId, file, imageType));
    }

    @Override
    @GetMapping(path = "/{restaurantId}")
    public HttpEntity<RestaurantResponse> findById(@PathVariable String restaurantId) throws EntityNotFoundException {
        return ResponseEntity.ok(restaurantService.getRestaurantDetails(restaurantId));
    }

    @GetMapping(path = "/{restaurantId}/name")
    public HttpEntity<String> findRestaurantNameById(@PathVariable String restaurantId) throws EntityNotFoundException {
        return ResponseEntity.ok(restaurantService.getRestaurantNameById(restaurantId));
    }

    @PatchMapping(path = "/{restaurantId}")
    public HttpEntity<RestaurantPatchUpdateDto> patchUpdateRestaurant(@PathVariable String restaurantId, @RequestBody RestaurantPatchUpdateDto entity) throws EntityNotFoundException {
        return ResponseEntity.ok(restaurantService.patchUpdate(entity, restaurantId));
    }

    @PostMapping(path = "/{restaurantId}/add-product")
    public HttpEntity<Product> addProduct(@PathVariable String restaurantId, @RequestBody Product product) {
        return ResponseEntity.ok(restaurantService.addProductToRestaurant(restaurantId, product));
    }

    @GetMapping(path = "/count")
    public HttpEntity<?> getCountOfRestaurants() throws EntityNotFoundException {
        return ResponseEntity.ok(restaurantService.getCount());
    }

    @Override
    @PutMapping(path = "/{restaurantId}")
    public HttpEntity<Restaurant> update(@PathVariable String restaurantId, @RequestBody Restaurant entity) throws EntityNotProcessableException, EntityNotFoundException {
        return super.update(restaurantId, entity);
    }

    @Override
    @DeleteMapping(path = "/{restaurantId}")
    public HttpEntity<Restaurant> delete(@PathVariable String restaurantId) throws EntityNotFoundException {
        Restaurant restaurant = restaurantService.findById(restaurantId).orElseThrow();
        restaurantService.deleteRestaurant(restaurant);
        return ResponseEntity.ok().build();
    }
}
