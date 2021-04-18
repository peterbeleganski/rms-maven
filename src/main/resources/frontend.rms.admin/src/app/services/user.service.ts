import {HttpClient, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AppSettings} from '../global/app.settings';
import {UserCreateModel} from '../models/user-create.model';
import {SecurityObjectModel} from '../models/security-object.model';
import {UserListWithRestaurantDetailsModel} from '../models/user-list-with-restaurant-details.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Promise<UserListWithRestaurantDetailsModel[]> {
    return this.httpClient.get<UserListWithRestaurantDetailsModel[]>(`${AppSettings.API_ENDPOINT}/api/all-users`).toPromise();
  }

  deleteUser(userId: string): Promise<HttpResponse<object>> {
    return this.httpClient.delete(`${AppSettings.API_ENDPOINT}/api/delete-user/${userId}`, {observe: 'response'}).toPromise();
  }

  addUser(user: UserCreateModel, roles: []): Promise<HttpResponse<SecurityObjectModel>> {
    return this.httpClient.post<SecurityObjectModel>(`${AppSettings.API_ENDPOINT}/api/add-user${roles && '?roles=' + roles.join()}`,
      user,
      {observe: 'response'})
      .toPromise();
  }
}
