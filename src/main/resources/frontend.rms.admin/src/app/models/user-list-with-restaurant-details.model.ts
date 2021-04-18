import {RestaurantListModel} from './restaurant-list.model';

export interface UserListWithRestaurantDetailsModel {
  id?: string;
  username?: string;
  roles?: string[];
  restaurant?: RestaurantListModel;
}
