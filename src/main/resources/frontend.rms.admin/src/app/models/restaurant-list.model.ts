import {SecurityObjectModel} from './security-object.model';
import {CategoryModel} from './category.model';

export interface RestaurantListModel {
  id?: string;
  name?: string;
  image?: any;
  location?: string;
  contentType?: string;
  menus?: string[];
  owner?: SecurityObjectModel;
  waiters?: SecurityObjectModel[];
  categories?: CategoryModel[];
  active?: boolean;
}
