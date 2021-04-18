import { ProductService } from '../../../services/product.service';
import { RestaurantService } from '../../../services/restaurant.service';
import { ProductModel } from '../../../models/product-list.model';
import { RestaurantListModel } from '../../../models/restaurant-list.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {AppSettings} from '../../../global/app.settings';
import {Router} from '@angular/router';
import {SecurityObjectModel} from '../../../models/security-object.model';
import {AuthenticationService} from '../../../services/authentication.service';
import {CategoryModel} from '../../../models/category.model';
import {MatDialog} from '@angular/material/dialog';
import {CreateNewCategoryDialogComponent} from './create-new-category.dialog';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  selectedMenuId: string;
  selectedRestaurantId: string;
  restaurants: RestaurantListModel[];
  menus: string[];
  user: SecurityObjectModel;
  form: FormGroup;
  product: ProductModel = {};
  selectedImage: string;
  categories: CategoryModel[];
  private selectedRestaurantFullObject: RestaurantListModel;
  addedCategory: CategoryModel;

  constructor(formBuilder: FormBuilder,
              private restaurantService: RestaurantService,
              private productService: ProductService,
              private toastrService: ToastrService,
              private router: Router,
              private authenticationService: AuthenticationService,
              private dialog: MatDialog,
              private categoryService: CategoryService) {
    this.form = formBuilder.group({
      selectedRestaurant: [],
      selectedMenu: [],
      title: [],
      price: [],
      description: [],
      allergens: [],
      tags: [],
      category: [],
      image: ['']
  });
  }

  ngOnInit() {
    this.fetchRestaurants();
  }

  addProduct() {
    this.product = {
      title: this.title.value,
      price: this.price.value,
      quantity: 1,
      description: this.description.value,
      allergens: this.allergens.value && this.allergens.value.split(','),
      tags: this.tags.value && this.tags.value.split(','),
      category: this.category.value,
      menus: this.selectedMenu.value,
      restaurantId: this.selectedRestaurant.value
    };
    this.selectedMenuId = this.selectedMenu.value || ['default'];
    this.selectedRestaurantId = this.selectedRestaurant.value;
    const formData = new FormData();
    formData.append('file', this.form.get('image').value);
    this.restaurantService.addProduct(this.selectedRestaurant.value, this.product)
      .then(res => {
        this.productService.addImageToProduct(res.body.id, formData)
          .then(() => {
            this.toastrService.success('Успешно добавихте продукта');
          })
          .catch(err => {AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
      }).catch(err => {AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
  }

  private async fetchRestaurants() {
    this.user = this.authenticationService.getSecurityObject();
    if (this.user.authorities && this.user.authorities.includes('OWNER')) {
      this.restaurants = (await this.restaurantService.getAllNames(this.user.username));
    } else {
      this.restaurants = (await this.restaurantService.getAllNames(undefined));
    }
  }

  async onSelectRestaurant() {
    const restaurantId = this.selectedRestaurant.value;
    this.restaurantService.getById(restaurantId).then(selectedRestaurantResponse => {
      this.menus = (selectedRestaurantResponse).body.menus || ['default'];
      this.categories = selectedRestaurantResponse.body.categories;
      this.selectedRestaurantFullObject = selectedRestaurantResponse.body;
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedImage = event.target.files[0]?.name;
      this.form.get('image').setValue(file);
    }
  }

  addNewCategory(selectedRestaurantId: string, event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.dialog.open(CreateNewCategoryDialogComponent, {
      data: {
        restaurantId: this.selectedRestaurant.value
      },
      height: '240px',
      width: '450px',
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.categoryService.getAllCategoriesByRestaurantId(this.selectedRestaurant.value).then(categories => {
        this.categories = categories;
        if (this.categories.length !== 0) {
          this.addedCategory = this.categories[this.categories.length - 1];
          this.category.setValue(this.addedCategory);
        }
      });
    });
  }

  get selectedRestaurant() {
    return this.form.get('selectedRestaurant');
  }

  get selectedMenu() {
    return this.form.get('selectedMenu');
  }

  get title() {
    return this.form.get('title');
  }

  get price() {
    return this.form.get('price');
  }

  get description() {
    return this.form.get('description');
  }

  get allergens() {
    return this.form.get('allergens');
  }

  get tags() {
    return this.form.get('tags');
  }

  get category() {
    return this.form.get('category');
  }
}
