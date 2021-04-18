import {CategoryModel} from './category.model';

export interface ProductModel {
  id?: string;
  title?: string;
  image?: any;
  contentType?: string;
  price?: number;
  quantity?: number;
  description?: string;
  allergens?: string[];
  tags?: string[];
  category?: CategoryModel;
  menus?: string[];
  restaurantId?: string;
}
