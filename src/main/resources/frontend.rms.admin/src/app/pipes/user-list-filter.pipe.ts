import { Pipe, PipeTransform } from '@angular/core';
import {RestaurantListModel} from '../models/restaurant-list.model';
import {UserListModel} from '../models/user-list.model';
import {UserListWithRestaurantDetailsModel} from '../models/user-list-with-restaurant-details.model';

@Pipe({
  name: 'filterUsers'
})
export class UserListFilterPipe implements PipeTransform {
  transform(items: UserListWithRestaurantDetailsModel[], searchText: string): UserListWithRestaurantDetailsModel[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.username.toLocaleLowerCase().includes(searchText);
    });
  }
}
