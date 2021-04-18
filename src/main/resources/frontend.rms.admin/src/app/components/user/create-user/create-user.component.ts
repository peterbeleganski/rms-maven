import {Component, OnInit} from '@angular/core';
import {RestaurantListModel} from '../../../models/restaurant-list.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserCreateModel} from '../../../models/user-create.model';
import {UserService} from '../../../services/user.service';
import {RestaurantService} from '../../../services/restaurant.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {AppSettings} from '../../../global/app.settings';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  restaurants: RestaurantListModel[];
  form: FormGroup;
  user: UserCreateModel = {};
  selectedRestaurantId: string;
  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private restaurantService: RestaurantService,
              private toastrService: ToastrService,
              private router: Router,
              private authenticationService: AuthenticationService) {
    this.form = formBuilder.group({
      username: [],
      password: [],
      restaurantId: [],
      selectedRestaurantId: [],
      roles: []
    });
  }

  async ngOnInit() {
    const user = this.authenticationService.getSecurityObject();
    if (user.authorities.includes('OWNER')) {
      this.restaurants = (await this.restaurantService.getAllNames(user.username));
    } else {
      this.restaurants = (await this.restaurantService.getAllNames());
    }

    this.user.password = '';
    this.user.restaurantId = '';
    this.user.username = '';
    this.selectedRestaurantId = '';
  }

  addUser() {
    const user: UserCreateModel = {
      username: this.form.get('username').value,
      password: this.form.get('password').value,
      restaurantId: this.form.get('restaurantId').value
    };
    this.userService.addUser(user, this.form.get('roles').value)
      .then(res => {
        if (res.status === 200) {
          this.toastrService.success('Успешно създадохте потребителя');
          this.setEmptyValuesForFormGroup(this.form);
        }
      }).catch(err => {AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
  }

  isAdmin(): boolean {
    return this.authenticationService.getSecurityObject().authorities.includes('ADMIN');
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
