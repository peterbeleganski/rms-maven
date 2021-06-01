import {ProductService} from '../../../services/product.service';
import {ProductModel} from '../../../models/product-list.model';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantService} from '../../../services/restaurant.service';
import {RestaurantListModel} from '../../../models/restaurant-list.model';
import {AppSettings} from '../../../global/app.settings';
import {ToastrService} from 'ngx-toastr';
import {ConfirmationDialogComponent} from '../../restaurant/list-restaurants/confirmation-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatTableDataSource} from '@angular/material/table';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {ReorderCategoriesComponent, ReorderCategoriesPayload} from "./reorder-categories.component";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-menu-detail',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ProductListComponent implements OnInit {
  text = '';
  restaurant: RestaurantListModel;
  products: ProductModel[];
  columnsToDisplay = ['title', 'price', 'allergens', 'tags', 'category', 'menus', 'edit', 'delete'];
  expandedElement: ProductModel | null;
  dataSource;
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 30;

  constructor(private restaurantService: RestaurantService,
              private productService: ProductService,
              private activeRoute: ActivatedRoute,
              private toastrService: ToastrService,
              private router: Router,
              private dialog: MatDialog,
              private categoryService: CategoryService) { }

  async ngOnInit() {
    await this.fetchProducts();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  async deleteProduct(product: ProductModel) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Сигурен ли си че искаш да изтриеш продукт '${product.title} ?'`,
        buttonText: {
          ok: 'Да',
          cancel: 'Не'
        }
      }
    });
    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        const a = document.createElement('a');
        a.click();
        a.remove();
        this.productService.deleteProduct(product.id)
            .then(response => {
              if (response.status === 204) {
                this.toastrService.success('Изтрихте продукта успешно');
                this.fetchProducts();
              }
            }).catch(err => {AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
      }
    });
  }

  private async fetchProducts(): Promise<void> {
    const restaurantId = this.activeRoute.snapshot.paramMap.get('id');
    this.restaurant = (await this.restaurantService.getById(restaurantId)).body;
    this.products = (await this.productService.getAllByRestaurantId(restaurantId)).body.content.filter(p => p !== null);
    this.dataSource = new MatTableDataSource(this.products);
  }

  getDisplayTitleCategory(element: any, column: any) {
    if (column === 'category') {
      return element.category?.title;
    }

    return element[column];
  }

  goToEditProduct(restaurantId: string, productId: string) {
    this.router.navigateByUrl(`/restaurants/${restaurantId}/products/${productId}/edit`);
  }

  openReorderCategoriesDialog() {
    const dialog = this.dialog.open(ReorderCategoriesComponent, {
      data: new ReorderCategoriesPayload(this.restaurant.categories)
    });

    return dialog.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        const updatedCategories = dialog.componentInstance.categories;
        this.categoryService.updateCategories(this.restaurant.id, updatedCategories)
          .then(() => {
            return this.fetchProducts().then(() => {
              this.toastrService.success('Успешно обновихте категориите!');
            });
          })
      }
    });
  }
}
