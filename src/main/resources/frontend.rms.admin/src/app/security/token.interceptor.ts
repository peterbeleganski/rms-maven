import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user && user.jwt) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${user.jwt}`
        }
      });
    }
    return next.handle(req);
  }
}
