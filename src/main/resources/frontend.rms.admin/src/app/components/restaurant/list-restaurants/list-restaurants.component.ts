import {RestaurantService} from '../../../services/restaurant.service';
import {Component, OnInit} from '@angular/core';
import {RestaurantListModel} from '../../../models/restaurant-list.model';
import {ToastrService} from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationDialogComponent} from './confirmation-dialog.component';
import {AuthenticationService} from '../../../services/authentication.service';
import {SecurityObjectModel} from '../../../models/security-object.model';
import {Router} from '@angular/router';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-list-restaurants',
  templateUrl: './list-restaurants.component.html',
  styleUrls: ['./list-restaurants.component.css']
})
export class ListRestaurantsComponent implements OnInit {
  restaurants: RestaurantListModel[];
  searchText = '';
  user: SecurityObjectModel;
  page = 0;
  size = 6;
  private totalElements: number;
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 30;

  constructor(private restaurantService: RestaurantService,
              private toastrService: ToastrService,
              private dialog: MatDialog,
              private authenticationService: AuthenticationService,
              private router: Router) { }

  async ngOnInit() {
    await this.fetchRestaurants({pageIndex: this.page, pageSize: this.size});
  }

  // fetch all restaurants for ADMIN role and only owner's restaurant if the user is owner
  private async fetchRestaurants(paginationObject): Promise<void> {
    this.user = this.authenticationService.getSecurityObject();

    if (this.user.authorities && this.user.authorities.includes('OWNER')) {
      await this.requestRestaurants(paginationObject, this.user.username);
    } else {
      await this.requestRestaurants(paginationObject);
    }

    this.page = paginationObject.pageIndex;
  }

  private async requestRestaurants(obj, user?: string) {
    const allRestaurantResponse = await this.restaurantService.getAll(user, this.searchText, obj.pageIndex, this.size);
    this.totalElements = allRestaurantResponse.body.totalElements;
    this.restaurants = allRestaurantResponse.body.content;
  }

  async deleteRestaurant(restaurant: RestaurantListModel) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: `Сигурен ли си че искаш да изтриеш ресторант '${restaurant.name} ?'`,
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
        this.restaurantService.deleteRestaurant(restaurant.id).then(response => {
          if (response.status === 200) {
            this.toastrService.success('Успешно изтрихте ресторанта!');
            this.fetchRestaurants({pageIndex: this.page, pageSize: this.size});
          }
        });
      }
    });
  }

  goToProducts(restaurantId: string) {
    this.router.navigateByUrl(`/restaurants/${restaurantId}/edit`);
  }

  isAdmin(): boolean {
    return this.user.authorities.includes('ADMIN');
  }
}

