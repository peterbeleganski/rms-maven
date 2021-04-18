import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RestaurantListModel } from '../../../models/restaurant-list.model';
import { ProductService } from '../../../services/product.service';
import { RestaurantService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-import-products',
  templateUrl: './import-products.component.html',
  styleUrls: ['./import-products.component.css']
})
export class ImportProductsComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  importProductsForm: FormGroup;
  restaurants: RestaurantListModel[];
  importFile: File;

  constructor(private formBuilder: FormBuilder,
              private restaurantService: RestaurantService,
              private productService: ProductService,
              private toasterService: ToastrService) {
    this.buildImportProductsForm();
  }

  async ngOnInit(): Promise<void> {
    await this.loadRestaurants();
  }

  onImportFileChosen(event) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.importFile = selectedFile;
    }
  }

  async importProducts(): Promise<void> {
    try {
      const restaurantId = this.restaurantId.value;
      const formData = new FormData();
      formData.append("importFile", this.importFile);
      const importProductsResponse = await this.productService.importProducts(restaurantId, formData);

      if (importProductsResponse.status === 200) {
        const importedProductsCount = importProductsResponse.body;
        this.toasterService.success(`Успешно импортиране на ${importedProductsCount} продукти`);
        this.clearFormFieldsAndData();
      } else {
        this.toasterService.error("Неуспешно импортиране на продукти");
      }
    } catch (error) {
      this.toasterService.error("Неуспешно импортиране на продукти");
      console.error(error);
    }
  }

  private buildImportProductsForm(): void {
    this.importProductsForm = this.formBuilder.group({
      restaurantId: ["", Validators.required],
      importFilename: ["", Validators.required]
    });
  }

  private async loadRestaurants(): Promise<void> {
    this.restaurants = await this.restaurantService.getAllNames();
  }

  private clearFormFieldsAndData(): void {
    this.importProductsForm.reset();
    this.form.resetForm();
    this.importFile = null;
  }

  get restaurantId() { return this.importProductsForm.get("restaurantId"); }

  get importFilename() { return this.importProductsForm.get("importFilename"); }
}
