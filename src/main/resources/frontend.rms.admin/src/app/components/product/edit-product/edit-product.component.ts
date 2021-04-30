import { ProductService } from '../../../services/product.service';
import { ProductModel } from '../../../models/product-list.model';
import {ActivatedRoute, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {RestaurantService} from '../../../services/restaurant.service';
import {RestaurantListModel} from '../../../models/restaurant-list.model';
import {AppSettings} from '../../../global/app.settings';
import {CategoryModel} from '../../../models/category.model';
import {CreateNewCategoryDialogComponent} from '../create-product/create-new-category.dialog';
import {MatDialog} from '@angular/material/dialog';
import {CategoryService} from '../../../services/category.service';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  isSelectedNewImage: boolean;
  form: FormGroup;
  productId: string;
  product: ProductModel = {title: ''};
  restaurant: RestaurantListModel;
  selectedImage: string;
  categories: CategoryModel[];
  restaurantId: string;
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 30;
  fetchedProduct = false;

  constructor(private formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private restaurantService: RestaurantService,
              private productService: ProductService,
              private toastrService: ToastrService,
              private router: Router,
              private dialog: MatDialog,
              private categoryService: CategoryService) {
    this.form = formBuilder.group({
      title: [],
      price: [],
      quantity: [],
      description: [],
      allergens: [],
      tags: [],
      category: [],
      imageUrl: ['']
    });
  }

  async ngOnInit() {
    await this.fetchProduct();
  }

  setFormData() {
    this.form = this.formBuilder.group({
      title: [this.product.title],
      price: [this.product.price],
      quantity: [this.product.quantity],
      description: [this.product.description],
      allergens: [this.product.allergens],
      tags: [this.product.tags],
      category: [this.product.category],
      imageUrl: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.isSelectedNewImage = true;
      const file = event.target.files[0];
      this.selectedImage = event.target.files[0]?.name;
      this.form.get('imageUrl').setValue(file);
    }
  }

  async editProduct() {
    this.product.title = this.form.get('title').value;
    this.product.price = this.form.get('price').value;
    this.product.quantity = this.form.get('quantity').value;
    this.product.description = this.form.get('description').value;
    this.product.allergens = this.form.get('allergens').value;
    this.product.tags = this.form.get('tags').value;
    this.product.category = this.form.get('category').value;

    this.productService.editProduct(this.product.id, this.product)
      .then(response => {
        if (this.isSelectedNewImage) {
          const formData = new FormData();
          formData.append('file', this.form.get('imageUrl').value);
          this.productService.addImageToProduct(this.product.id, formData)
            .then(res => {
              this.toastrService.success('Успешно редактирахте продукта');
              this.router.navigateByUrl(`/restaurants/${this.restaurant.id}/products`);
            })
            .catch(err => {
              this.toastrService.warning('Проблем при качването на снимката');
            });
        } else {
          this.toastrService.success('Успешно редактирахте продукта');
          this.router.navigateByUrl(`/restaurants/${this.restaurant.id}/products`);
        }
      }).catch(err => {AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
  }

  private async fetchProduct(): Promise<void> {
    const restaurantId = this.activeRoute.snapshot.paramMap.get('id');
    this.restaurantId = restaurantId;
    const productId = this.activeRoute.snapshot.paramMap.get('productId');
    this.productId = productId;
    this.product = (await this.productService.getById(productId)).body;
    this.restaurant = (await this.restaurantService.getById(restaurantId)).body;
    this.categories = this.restaurant.categories;
    this.setFormData();
    this.fetchedProduct = true;
  }

  addNewCategory(selectedRestaurantId: string, event: Event) {
    event.stopPropagation();
    event.preventDefault();

    this.dialog.open(CreateNewCategoryDialogComponent, {
      data: {
        restaurantId: this.restaurant.id
      },
      height: '240px',
      width: '450px',
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.categoryService.getAllCategoriesByRestaurantId(this.restaurant.id).then(categories => {
        this.categories = categories;
        if (this.categories.length !== 0) {
          const addedCategory = this.categories[this.categories.length - 1];
          this.form.get('category').setValue(addedCategory);
        }
      });
    });
  }
}
