import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppSettings} from '../global/app.settings';
import {CategoryModel} from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {
  }

  getAllCategoriesByRestaurantId(restaurantId: string): Promise<CategoryModel[]> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<CategoryModel[]>(`${AppSettings.API_ENDPOINT}/api/category?restaurantId=${restaurantId}`).toPromise();
  }

  addCategory(restaurantId: string, category: CategoryModel): Promise<CategoryModel> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post<CategoryModel>(`${AppSettings.API_ENDPOINT}/api/category/create?restaurantId=${restaurantId}`, category).toPromise();
  }

  updateCategories(restaurantId: string, categories: CategoryModel[]): Promise<CategoryModel[]> {
    return this.httpClient.put<CategoryModel[]>(`${AppSettings.API_ENDPOINT}/api/category?restaurantId=${restaurantId}`, categories).toPromise();
  }
}
