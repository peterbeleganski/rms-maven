import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {AppSettings} from '../../../global/app.settings';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from '../../restaurant/list-restaurants/confirmation-dialog.component';
import {UserListWithRestaurantDetailsModel} from '../../../models/user-list-with-restaurant-details.model';
import {RestaurantListModel} from '../../../models/restaurant-list.model';
import {AuthenticationService} from '../../../services/authentication.service';
import {SecurityObjectModel} from '../../../models/security-object.model';
import {RestaurantService} from '../../../services/restaurant.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: UserListWithRestaurantDetailsModel[];
  restaurants: RestaurantListModel[];
  user: SecurityObjectModel;
  text = '';
  constructor(private userService: UserService,
              private toastrService: ToastrService,
              private router: Router,
              private dialog: MatDialog,
              private authenticationService: AuthenticationService,
              private restaurantService: RestaurantService) { }

  async ngOnInit() {
    this.fetchAllUsers();
  }

  private async fetchAllUsers() {
    this.users = await this.userService.getAllUsers();
    this.user = this.authenticationService.getSecurityObject();
    if (this.user.authorities && this.user.authorities.includes('OWNER')) {
      this.restaurants = (await this.restaurantService.getAll(this.user.username, '', 0, 100000)).body.content;
    } else {
      this.restaurants = (await this.restaurantService.getAll(undefined, '', 0, 100000)).body.content;
    }
  }

  deleteUser(user: UserListWithRestaurantDetailsModel) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Сигурен ли си че искаш да изтриеш потребител '${user.username} ?'`,
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
        this.userService.deleteUser(user.id)
          .then(res => {
            if (res.status === 200) {
              this.fetchAllUsers();
              this.toastrService.success('Успешно изтрихте потребителя');
            }
          }).catch(err => {AppSettings.redirectAndRequireToLogin(err.status, this.toastrService, this.router); });
      }
    });
  }

  getRepresentationTextForRoles(roles: string[]): string[] {
    return AppSettings.getRepresentationTextForRoles(roles);
  }
}
