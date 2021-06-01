import {Component, OnInit} from '@angular/core';
import {RestaurantListModel} from '../../../models/restaurant-list.model';
import {RestaurantService} from '../../../services/restaurant.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AppSettings} from '../../../global/app.settings';
import {ThemePalette} from "@angular/material/core";
import {ProgressSpinnerMode} from "@angular/material/progress-spinner";

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  private restaurant: RestaurantListModel = {};
  form: FormGroup;
  fileData: File = null;
  selectedCoverImage: string;
  selectedLogoImage: string;

  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  progressSpinnerValue = 30;

  spinner: boolean = false;

  constructor(private restaurantService: RestaurantService,
              private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private router: Router) {
    this.form = formBuilder.group({
        name: [],
        location: [],
        coverImage: [''],
        logoImage: [''],
        workingHoursStart: [''],
        workingHoursEnd: ['']
    });
  }

  ngOnInit() {
    this.restaurant.name = '';
    this.restaurant.location = '';
    this.restaurant.workingHours = '';
  }

  onFileSelect(event, imageType) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (imageType === 'coverImage') {
        this.selectedCoverImage = event.target.files[0]?.name;
      } else {
        this.selectedLogoImage = event.target.files[0]?.name;
      }
      this.form.get(imageType).setValue(file);
    }
  }

  addRestaurant() {
    this.spinner = true;
    this.restaurant = {
      name: this.name.value,
      location: this.location.value,
      workingHours: this.workingHours
    };

    this.restaurantService.addRestaurant(this.restaurant).then(response => {
        let formData = new FormData();
        const currentRestaurantId = response.body.id;

        const promises = [];
        formData.append('file', this.form.get('coverImage').value);
        promises.push(this.restaurantService.addImageToRestaurant(formData, currentRestaurantId, 'coverImage'));

        formData = new FormData();
        formData.append('file', this.form.get('logoImage').value);
        promises.push(this.restaurantService.addImageToRestaurant(formData, currentRestaurantId, 'logoImage'));

        Promise.all(promises).then(() => {
            this.spinner = false;
            this.toastrService.success('Успешно добавен ресторант');
            this.router.navigateByUrl('/restaurants');
        });
    }).catch(err => {
      this.spinner = false;
      AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router);
    });
  }

  get name() {
    return this.form.get('name');
  }

  get location() {
    return this.form.get('location');
  }

  get workingHours() {
    return this.form.get('workingHoursStart').value + ' - ' + this.form.get('workingHoursEnd').value;
  }

  private setEmptyValuesForFormGroup(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.setValue('');
      control.setErrors(undefined);

      if (control.controls) {
        this.setEmptyValuesForFormGroup(control);
      }
    });
  }
}
