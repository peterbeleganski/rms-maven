import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { RestaurantListModel } from '../models/restaurant-list.model';
import {AppSettings} from '../global/app.settings';
import {ProductModel} from '../models/product-list.model';
import {RestaurantUpdateModel} from '../models/restaurant-update.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient: HttpClient) { }

  getAll(ownerUsername?: string, search?: string, page?: number, size?: number): Promise<HttpResponse<ListResponse<RestaurantListModel>>> {
    return this.httpClient
      // tslint:disable-next-line:max-line-length
      .get<ListResponse<RestaurantListModel>>(`${AppSettings.API_ENDPOINT}/api/restaurant/all?page=${page}&size=${size}&searchTerm=${search}${ownerUsername ? '&ownerUsername=' + ownerUsername : ''}`,
      {observe: 'response'})
      .toPromise();
  }

  getAllNames(ownerUsername?: string): Promise<RestaurantListModel[]> {
    return this.httpClient
      // tslint:disable-next-line:max-line-length
      .get<RestaurantListModel[]>(`${AppSettings.API_ENDPOINT}/api/restaurant/names${ownerUsername ? '?ownerUsername=' + ownerUsername : ''}`)
      .toPromise();
  }

  getById(id: string): Promise<HttpResponse<RestaurantListModel>> {
    return this.httpClient.get<RestaurantListModel>(`${AppSettings.API_ENDPOINT}/api/restaurant/${id}`, {observe: 'response'}).toPromise();
  }

  addProduct(id: string, product: ProductModel): Promise<HttpResponse<ProductModel>> {
    return this.httpClient.post<ProductModel>(`${AppSettings.API_ENDPOINT}/api/restaurant/${id}/add-product`,
      product,
      {observe: 'response'}).toPromise();
  }

  patchUpdateRestaurant(restaurantId: string, restaurant: RestaurantUpdateModel) {
    return this.httpClient.patch<RestaurantUpdateModel>(`${AppSettings.API_ENDPOINT}/api/restaurant/${restaurantId}`,
      restaurant,
      {observe: 'response'})
      .toPromise();
  }

   addRestaurant(restaurant: RestaurantListModel): Promise<HttpResponse<RestaurantListModel>> {
     return this.httpClient.post<RestaurantListModel>(`${AppSettings.API_ENDPOINT}/api/restaurant/create`,
       restaurant,
       {observe: 'response'})
       .toPromise();
   }

   addImageToRestaurant(formData, restaurantId) {
     return this.httpClient.post(`${AppSettings.API_ENDPOINT}/api/restaurant/${restaurantId}/upload-image`,
       formData,
       {observe: 'response'})
       .toPromise();
   }

   deleteRestaurant(id: string): Promise<HttpResponse<object>> {
    return this.httpClient.delete(`${AppSettings.API_ENDPOINT}/api/restaurant/${id}`, {observe: 'response'}).toPromise();
   }
}

export class ListResponse<T> {
  content: T[];
  totalElements: number;
}
