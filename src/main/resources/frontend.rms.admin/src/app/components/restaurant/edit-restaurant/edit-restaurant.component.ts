import { RestaurantService } from '../../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { RestaurantListModel } from '../../../models/restaurant-list.model';
import {ToastrService} from 'ngx-toastr';
import {AppSettings} from '../../../global/app.settings';
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

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
  isSelectedNewLogo: boolean;
  isSelectedNewCover: boolean;
  selectedCoverImage: string;
  selectedLogoImage: string;

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  progressSpinnerValue = 30;

  spinner: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private activeRoute: ActivatedRoute,
              private restaurantService: RestaurantService,
              private toastrService: ToastrService,
              private router: Router) {
    this.form = this.formBuilder.group({
      name: [],
      location: [],
      image: [],
      logoImage: [],
      coverImage: [],
      active: [],
      workingHoursStart: [''],
      workingHoursEnd: ['']
    });
  }

  async ngOnInit() {
    await this.fetchRestaurants();
    console.log(this.restaurant.workingHours.split('-')[0]);
    this.form = this.formBuilder.group({
      name: this.restaurant.name,
      location: this.restaurant.location,
      image: this.restaurant.image,
      logoImage: this.restaurant.logoImageUrl,
      coverImage: this.restaurant.coverImageUrl,
      active: this.restaurant.active ? "active" : "inactive",
      workingHoursStart: this.restaurant.workingHours.split(' - ')[0],
      workingHoursEnd: this.restaurant.workingHours.split(' - ')[1]
    });
  }

  async editRestaurant(restaurantId: string) {
    this.spinner = true;
    this.restaurant.name = this.form.get('name').value;
    this.restaurant.location = this.form.get('location').value;
    this.restaurant.active = this.form.get("active").value === "active";
    this.restaurant.workingHours = this.form.get("workingHoursStart").value + ' - ' + this.form.get('workingHoursEnd').value;

    this.restaurantService.patchUpdateRestaurant(restaurantId, this.restaurant)
      .then(response => {
        const promises = [];
        if (this.isSelectedNewCover) {
          const formData = new FormData();
          formData.append('file', this.form.get('coverImage').value);
          promises.push(this.restaurantService.addImageToRestaurant(formData, this.restaurant.id, 'coverImage'));
        }
        if (this.isSelectedNewLogo) {
          const formData = new FormData();
          formData.append('file', this.form.get('logoImage').value);
          promises.push(this.restaurantService.addImageToRestaurant(formData, this.restaurant.id, 'logoImage'));
        }

        Promise.all(promises).then(() => {
          this.router.navigateByUrl('/restaurants');
          this.toastrService.success('Успешно редактирахте ресторанта');
          this.spinner = false;
        });
    }).catch(err => {
      this.spinner = false;
      AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router);
    });
  }

  onFileSelect(event, imageType) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (imageType === 'coverImage') {
        this.selectedCoverImage = event.target.files[0]?.name;
        this.isSelectedNewCover = true;
      } else {
        this.selectedLogoImage = event.target.files[0]?.name;
        this.isSelectedNewLogo = true;
      }
      this.form.get(imageType).setValue(file);
    }
  }

  private async fetchRestaurants(): Promise<void> {
    const restaurantId = this.activeRoute.snapshot.paramMap.get('id');
    this.restaurant = (await this.restaurantService.getById(restaurantId)).body;
  }
}
