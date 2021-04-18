import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {UserAuthenticationModel} from '../models/user-authentication.model';
import {AppSettings} from '../global/app.settings';
import {SecurityObjectModel} from '../models/security-object.model';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private httpClient: HttpClient,
              private toastrService: ToastrService,
              private router: Router) {
  }

  login(user: UserAuthenticationModel): Promise<HttpResponse<object>> {
    return this.httpClient.post(`${AppSettings.API_ENDPOINT}/authenticate`, user, {observe: 'response'}).toPromise();
  }

  getSecurityObject(): SecurityObjectModel {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  setSecurityObject(obj: SecurityObjectModel) {
    window.localStorage.setItem('user', JSON.stringify(obj as SecurityObjectModel));
  }

  logout() {
    window.localStorage.removeItem('user');
    this.toastrService.success('Success logout!');
    this.router.navigateByUrl('/login');
  }
}
