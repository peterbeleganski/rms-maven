package com.restaurant.management.service;

import com.mongodb.BasicDBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import com.restaurant.management.exception.EntityNotFoundException;
import com.restaurant.management.model.Order;
import com.restaurant.management.model.Product;
import com.restaurant.management.model.Restaurant;
import com.restaurant.management.model.User;
import com.restaurant.management.model.dto.ListRestaurantNamesDto;
import com.restaurant.management.model.dto.RestaurantPatchUpdateDto;
import com.restaurant.management.model.dto.RestaurantResponse;
import com.restaurant.management.repository.ProductRepository;
import com.restaurant.management.repository.RestaurantRepository;
import com.restaurant.management.repository.UserRepository;
import com.restaurant.management.util.ObjectMapperUtils;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
public class RestaurantService extends DefaultCrudService<Restaurant> {

    private final UserRepository userRepository;

    private final GridFsTemplate gridFsTemplate;

    private final GridFsOperations operations;

    private final MongoTemplate mongoTemplate;

    private final ProductRepository productRepository;

    public RestaurantService(RestaurantRepository restaurantRepository,
                             GridFsTemplate gridFsTemplate,
                             GridFsOperations operations,
                             MongoTemplate mongoTemplate,
                             ProductRepository productRepository,
                             UserRepository userRepository) {
        this.crudRepository = restaurantRepository;
        this.operations = operations;
        this.gridFsTemplate = gridFsTemplate;
        this.userRepository = userRepository;
        this.mongoTemplate = mongoTemplate;
        this.productRepository = productRepository;
    }

    public Restaurant addImageToRestaurant(String restaurantId, MultipartFile file) throws IOException {
        Restaurant restaurant = findById(restaurantId).orElseThrow();
        ObjectId store = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), new BasicDBObject());
        GridFSFile img = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(store.toString())));
        if (img != null) {
            String contentType = (String) img.getMetadata().get("_contentType");
            restaurant.setContentType(contentType);
            restaurant.setImage(operations.getResource(img).getInputStream().readAllBytes());
            restaurant.setImageId(img.getObjectId().toString());
        }
        return crudRepository.save(restaurant);
    }

    public Order addOrderToRestaurant(String restaurantId, Order order) {
        Restaurant restaurant = findById(restaurantId).orElseThrow();
        restaurant.getOrders().add(order);
        crudRepository.save(restaurant);
        return order;
    }

    public Long getCount() {
        return crudRepository.count();
    }

    public RestaurantResponse getRestaurantDetails(String restaurantId) {
        return ObjectMapperUtils.map(crudRepository.findById(restaurantId).orElseThrow(), RestaurantResponse.class);
    }

    public String getRestaurantNameById(String restaurantId) {
        Query query = new Query();
        query.fields().include("name");
        query.addCriteria(Criteria.where("_id").is(restaurantId));
        Restaurant foundRestaurant = mongoTemplate.findOne(query, Restaurant.class);

        if (foundRestaurant == null) {
            throw new EntityNotFoundException("Restaurant with id " + restaurantId + " not found!");
        }

        return foundRestaurant.getName();
    }

    public RestaurantPatchUpdateDto patchUpdate(RestaurantPatchUpdateDto entity, String restaurantId) {
        Update update = new Update();
        update.set("name", entity.getName());
        update.set("location", entity.getLocation());
        update.set("image", entity.getImage());
        update.set("contentType", entity.getContentType());
        update.set("active", entity.isActive());
        return ObjectMapperUtils.map(
                mongoTemplate.findAndModify(Query.query(Criteria.where("_id").is(restaurantId)), update, Restaurant.class),
                RestaurantPatchUpdateDto.class);
    }

    public Product addProductToRestaurant(String restaurantId, Product product) {
        Restaurant restaurant = crudRepository.findById(restaurantId).orElseThrow();
        Product createdProduct = productRepository.save(product);
        restaurant.getProducts().add(createdProduct);
        restaurant.getProducts()
                .stream()
                .filter(Objects::nonNull)
                .map(Product::getMenus)
                .flatMap(Collection::stream)
                .forEach(productMenu -> {
                    if (!restaurant.getMenus().contains(productMenu)) {
                        restaurant.getMenus().add(productMenu);
                    }
                });

        crudRepository.save(restaurant);
        return createdProduct;
    }

    public Page<RestaurantResponse> getAllRestaurants(PageRequest page, String searchTerm, String ownerUsername) {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        var roles = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.toList());
        var term = searchTerm != null ? searchTerm : "";
        Page<Restaurant> restaurantsPage;

        if (roles.contains("ROLE_ADMIN")) {
            restaurantsPage = ((RestaurantRepository) crudRepository).findAllByNameIgnoreCaseLikeOrLocationIgnoreCaseLike(term, term, page);
        } else if (roles.contains("ROLE_OWNER")) {
            var user = userRepository.findByUsername(authentication.getName())
                    .orElseThrow(() -> new RuntimeException("User with that username " + authentication.getName() + "does not exists"));
            restaurantsPage = ((RestaurantRepository) crudRepository).findAllByOwnerAndNameIgnoreCaseLikeOrOwnerAndLocationIgnoreCaseLike(user, term, user, term, page);
        } else {
            restaurantsPage = ((RestaurantRepository) crudRepository).findAllByNameIgnoreCaseLikeAndActiveTrueOrLocationIgnoreCaseLikeAndActiveTrue(term, term, page);
        }

        return new PageImpl<>(ObjectMapperUtils.mapAll(restaurantsPage.getContent(), RestaurantResponse.class),
                restaurantsPage.getPageable(),
                restaurantsPage.getTotalElements());
    }

    public void deleteRestaurant(Restaurant restaurant) {
        crudRepository.delete(restaurant);

        gridFsTemplate.delete(new Query(Criteria.where("_id").is(restaurant.getImageId())));
    }

    public List<ListRestaurantNamesDto> getAllRestaurantNames(String ownerUsername) {
        Query query = new Query();
        query.fields().include("id");
        query.fields().include("name");
        query.fields().include("categories");

        if (ownerUsername != null) {

            User user = userRepository.findByUsername(ownerUsername)
                    .orElseThrow(() -> new RuntimeException("User with that username " + ownerUsername + "does not exists"));

            query.addCriteria(Criteria.where("owner._id").is(user.getId()));

        }

        return ObjectMapperUtils.mapAll(this.mongoTemplate.find(query, Restaurant.class), ListRestaurantNamesDto.class);
    }

    public List<Order> getAllOrdersForRestaurant(String restaurantId) {
        Query query = new Query();
        query.addCriteria(Criteria.where("_id").is(restaurantId));
        query.fields().exclude("products");
        Restaurant foundRestaurant = mongoTemplate.findOne(query, Restaurant.class);

        if (foundRestaurant == null) {
            throw new EntityNotFoundException("restaurant with id: " + restaurantId + " not found!" );
        }

        return foundRestaurant.getOrders().stream().filter(order -> !order.isArchived()).collect(Collectors.toList());
    }

    public boolean exist(String restaurantId) {
        Query query = Query.query(Criteria.where("_id").is(restaurantId));
        return mongoTemplate.exists(query, Restaurant.class);
    }
}
