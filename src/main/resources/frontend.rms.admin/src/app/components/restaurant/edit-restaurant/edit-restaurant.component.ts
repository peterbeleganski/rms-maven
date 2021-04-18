import { RestaurantService } from '../../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { RestaurantListModel } from '../../../models/restaurant-list.model';
import {ToastrService} from 'ngx-toastr';
import {AppSettings} from '../../../global/app.settings';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {
  form: FormGroup;
  fileData: File = null;
  restaurant: RestaurantListModel = {name: ''};
  isSelectedNewImage: boolean;
  selectedImage: string;
  constructor(private formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private restaurantService: RestaurantService,
              private toastrService: ToastrService,
              private router: Router) {
    this.form = this.formBuilder.group({
      name: [],
      location: [],
      image: [],
      active: []
    });
  }

  async ngOnInit() {
    await this.fetchRestaurants();
    this.form = this.formBuilder.group({
      name: this.restaurant.name,
      location: this.restaurant.location,
      image: this.restaurant.image,
      active: this.restaurant.active ? "active" : "inactive"
    });
  }

  async editRestaurant(restaurantId: string) {
    this.restaurant.name = this.form.get('name').value;
    this.restaurant.location = this.form.get('location').value;
    this.restaurant.active = this.form.get("active").value === "active";
    this.restaurantService.patchUpdateRestaurant(restaurantId, this.restaurant)
      .then(response => {
      if (response.status === 200 && this.isSelectedNewImage) {
        const formData = new FormData();
        formData.append('file', this.form.get('image').value);
        this.restaurantService.addImageToRestaurant(formData, this.restaurant.id)
          .then(() => {
            this.router.navigateByUrl('/restaurants');
            this.toastrService.success('Успешно редактирахте ресторанта');
          });
      } else {
        this.router.navigateByUrl('/restaurants');
        this.toastrService.success('Успешно редактирахте ресторанта');
      }
    }).catch(err => {AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      this.isSelectedNewImage = true;
      const file = event.target.files[0];
      this.selectedImage = event.target.files[0]?.name;
      this.form.get('image').setValue(file);
    }
  }

  private async fetchRestaurants(): Promise<void> {
    const restaurantId = this.activeRoute.snapshot.paramMap.get('id');
    this.restaurant = (await this.restaurantService.getById(restaurantId)).body;
  }
}
