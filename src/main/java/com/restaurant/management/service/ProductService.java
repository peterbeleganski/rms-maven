package com.restaurant.management.service;

import com.mongodb.BasicDBObject;
import com.mongodb.client.gridfs.model.GridFSFile;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;
import com.restaurant.management.exception.EntityNotFoundException;
import com.restaurant.management.exception.ProductImportFailedException;
import com.restaurant.management.model.Product;
import com.restaurant.management.model.Restaurant;
import com.restaurant.management.repository.CategoryRepository;
import com.restaurant.management.repository.ProductRepository;
import com.restaurant.management.repository.RestaurantRepository;
import lombok.extern.slf4j.Slf4j;
import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

@Slf4j
@Service
public class ProductService extends DefaultCrudService<Product> {

    private final GridFsTemplate gridFsTemplate;

    private final GridFsOperations operations;

    private final MongoTemplate mongoTemplate;

    private final RestaurantRepository restaurantRepository;

    private final CategoryRepository categoryRepository;

    public ProductService(GridFsTemplate gridFsTemplate,
                          GridFsOperations operations,
                          MongoTemplate mongoTemplate,
                          ProductRepository productRepository,
                          RestaurantRepository restaurantRepository,
                          CategoryRepository categoryRepository) {
        this.gridFsTemplate = gridFsTemplate;
        this.operations = operations;
        this.mongoTemplate = mongoTemplate;
        crudRepository = productRepository;
        this.restaurantRepository = restaurantRepository;
        this.categoryRepository = categoryRepository;
    }

    public void addImageToProduct(String productId, MultipartFile file) throws IOException {
        Product product = crudRepository.findById(productId).orElseThrow();
        ObjectId store = gridFsTemplate.store(file.getInputStream(), file.getName(), file.getContentType(), new BasicDBObject());
        GridFSFile img = gridFsTemplate.findOne(new Query(Criteria.where("_id").is(store.toString())));
        if (img != null) {
            String contentType = (String) img.getMetadata().get("_contentType");
            product.setContentType(contentType);
            product.setImage(operations.getResource(img).getInputStream().readAllBytes());
            product.setImageId(img.getObjectId().toString());
        }

        crudRepository.save(product);
    }

    public Long getCount() {
        return crudRepository.count();
    }

    public Page<Product> getProductsForRestaurant(String restaurantId, PageRequest page, String searchTerm) {
        Page<Product> products;

        if (searchTerm != null) {
            products = ((ProductRepository) crudRepository)
                    .findAllByRestaurantIdAndTitleIgnoreCaseLikeOrRestaurantIdAndCategoryIgnoreCaseLike(restaurantId, searchTerm, restaurantId, searchTerm, page);
        } else {
            products = ((ProductRepository) crudRepository).findAllByRestaurantId(restaurantId, page);
        }

        List<Product> productCopy = new ArrayList<>(products.getContent());

        productCopy.sort(Comparator.comparing((Product p) -> p.getCategory().getPriority()));

        return new PageImpl<>(productCopy, products.getPageable(), products.getTotalElements());
    }

    public List<Product> findAllByIds(List<String> ids) {
        Query query = new Query();
        query.fields().exclude("image");
        query.fields().exclude("contentType");

        query.addCriteria(Criteria.where("_id").in(ids));

        return mongoTemplate.find(query, Product.class);
    }

    public void deleteProduct(Product product) {
        crudRepository.delete(product);

        gridFsTemplate.delete(new Query(Criteria.where("_id").is(product.getImageId())));
    }

    public int importProducts(String restaurantId, MultipartFile importFile) {
        try {
            Reader fileReader = new BufferedReader(new InputStreamReader(importFile.getInputStream()));
            CsvToBean<Product> beanBuilder = new CsvToBeanBuilder<Product>(fileReader)
                    .withType(Product.class)
                    .build();

            List<Product> products = beanBuilder.parse();
            products.forEach(product -> product.setRestaurantId(restaurantId));
            crudRepository.saveAll(products);

            log.debug("Successfully read csv file {}", importFile.getOriginalFilename());

            Restaurant restaurant = restaurantRepository.findById(restaurantId)
                    .orElseThrow(() -> new EntityNotFoundException(String.format("Restaurant with id %s not found", restaurantId)));
            restaurant.getProducts().addAll(products);
            restaurantRepository.save(restaurant);

            log.info("Successfully imported {} new products into restaurant {}", products.size(), restaurant.getName());

            return products.size();
        } catch (IOException e) {
            log.error("Failed to import data from file with name {}", importFile.getOriginalFilename());
            throw new ProductImportFailedException("Failed to import products");
        }
    }

    public Page<Product> findByCategory(String categoryId, PageRequest page) {
        var category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new EntityNotFoundException(String.format("Category with id: %s not found", categoryId)));

        return ((ProductRepository) crudRepository).findByCategory(category, page);
    }
}
