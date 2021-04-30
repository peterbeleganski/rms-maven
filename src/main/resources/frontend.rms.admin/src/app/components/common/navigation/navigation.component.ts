import {Component, OnInit} from '@angular/core';
import {SecurityObjectModel} from '../../../models/security-object.model';
import {AuthenticationService} from '../../../services/authentication.service';
import {AppSettings} from '../../../global/app.settings';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, private appComponent: AppComponent) {
  }

  ngOnInit() {
  }

  getSecurityObject(): SecurityObjectModel {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  isAuthenticatedForRole(role: string) {
    const user = JSON.parse(window.localStorage.getItem('user'));
    if (user && user.authorities) {
      return role.includes(user.authorities);
    } else {
      return false;
    }
  }

  getRepresentationTextForRoles(roles: string[]): string[] {
    return AppSettings.getRepresentationTextForRoles(roles);
  }

  logout() {
    this.appComponent.sideBarOpened = false;
    this.authenticationService.logout();
  }
}
