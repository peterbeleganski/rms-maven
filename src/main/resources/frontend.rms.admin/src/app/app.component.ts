import {Component} from '@angular/core';
import {SecurityObjectModel} from './models/security-object.model';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RMS-admin';
  sideBarOpened = false;

  constructor(private authenticationService: AuthenticationService) {
  }

  toggle() {
    this.sideBarOpened = !this.sideBarOpened;
  }

  getSecurityObject(): SecurityObjectModel {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  logout() {
    this.authenticationService.logout();
  }
}
