import {ProductModel} from '../models/product-list.model';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppSettings} from '../global/app.settings';
import {ListResponse} from './restaurant.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  addImageToProduct(productId: string, formData: FormData) {
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}/api/product/${productId}/upload-image`,
      formData,
      {observe: 'response'})
      .toPromise();
  }

  editProduct(productId: string, product: ProductModel): Promise<HttpResponse<object>> {
    return this.httpClient.put(`${AppSettings.API_ENDPOINT}/api/product/${productId}`, product, {observe: 'response'}).toPromise();
  }

  getById(productId: string): Promise<HttpResponse<ProductModel>> {
    return this.httpClient.get<ProductModel>(`${AppSettings.API_ENDPOINT}/api/product/${productId}`, {observe: 'response'}).toPromise();
  }

  deleteProduct(productId: string): Promise<HttpResponse<object>> {
    return this.httpClient.delete(`${AppSettings.API_ENDPOINT}/api/product/${productId}`, {observe: 'response'}).toPromise();
  }

  getAllByRestaurantId(id: string): Promise<HttpResponse<ListResponse<ProductModel>>> {
    // tslint:disable-next-line:max-line-length
    return this.httpClient.get<ListResponse<ProductModel>>(`${AppSettings.API_ENDPOINT}/api/product/all?page=0&size=100000&restaurantId=${id}`, {observe: 'response'}).toPromise();
  }

  importProducts(restaurantId: string, formData: FormData): Promise<HttpResponse<number>> {
    return this.httpClient.post<number>(
      `${AppSettings.API_ENDPOINT}/api/product/${restaurantId}/import-products`,
      formData,
      {observe: "response"}).toPromise();
  }
}
