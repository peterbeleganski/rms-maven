import {Component, OnInit} from '@angular/core';
import {RestaurantListModel} from '../../../models/restaurant-list.model';
import {RestaurantService} from '../../../services/restaurant.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AppSettings} from '../../../global/app.settings';

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
  constructor(private restaurantService: RestaurantService,
              private formBuilder: FormBuilder,
              private toastrService: ToastrService,
              private router: Router) {
    this.form = formBuilder.group({
        name: [],
        location: [],
        coverImage: [''],
        logoImage: ['']
    });
  }

  ngOnInit() {
    this.restaurant.name = '';
    this.restaurant.location = '';
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
    this.restaurant = {
      name: this.name.value,
      location: this.location.value
    };

    this.restaurantService.addRestaurant(this.restaurant)
      .then(res => {
        const formData = new FormData();
        const currentRestaurantId = res.body.id;
        formData.append('file', this.form.get('coverImage').value);
        this.restaurantService.addImageToRestaurant(formData, currentRestaurantId, 'coverImage')
          .then(response => {
            const formData = new FormData();
            formData.append('file', this.form.get('logoImage').value);
            return this.restaurantService.addImageToRestaurant(formData, currentRestaurantId, 'logoImage')
          })
          .then(response => {
            if (response.status === 200) {
              this.toastrService.success('Успешно добавен ресторант');
              this.setEmptyValuesForFormGroup(this.form);
            } else {
              this.toastrService.warning('Възникна проблем при създаването на ресторанта');
            }
        });
    }).catch(err => {AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
  }

  get name() {
    return this.form.get('name');
  }

  get location() {
    return this.form.get('location');
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
