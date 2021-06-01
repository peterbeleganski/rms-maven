import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';

export class AppSettings {
  public static API_ENDPOINT = 'https://meniuto-portal-dev.azurewebsites.net'; // 'https://tequila-s-laimche-brat.herokuapp.com  / 8080
  static redirectAndRequireToLogin(errStatus, toastrService: ToastrService, router: Router) {
    if (errStatus === 403) {
      toastrService.warning('Моля влезте си в акаунта', 'Сесията ви е приключила');
      window.localStorage.removeItem('user');
      router.navigateByUrl('/login');
    }
  }

  static getRepresentationTextForRoles(roles: string[]): string[] {
    const representationRoles = [];

    roles.forEach(role => {
      if (role.includes('ADMIN')) {
        representationRoles.push('Администратор');
      }

      if (role.includes('OWNER')) {
        representationRoles.push('Собственик');
      }

      if (role.includes('WAITER')) {
        representationRoles.push('Сервитьор');
      }
    });

    return representationRoles;
  }
}
