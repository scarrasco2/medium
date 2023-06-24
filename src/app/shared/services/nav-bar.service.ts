import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { Menu } from '../models/menu';
import { LOGIN_URL, REGISTER_URL } from 'src/app/auth/auth.urls';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  constructor(private translate: TranslateService) {}
  getMenu(): Observable<MenuItem[]> {
    return this.translate.stream('MENU').pipe(
      map((MENU: Menu) => {
        return [
          {
            label: MENU.HOME,
            icon: 'pi pi-home',
            routerLink: '/',
          },
          {
            label: MENU.ACCOUNT,
            icon: 'pi pi-user',
            items: [
              {
                label: MENU.REGISTER,
                icon: 'pi pi-user-plus',
                routerLink: REGISTER_URL,
              },
              {
                label: MENU.LOGIN,
                icon: 'pi pi-sign-in',
                routerLink: LOGIN_URL,
              },
            ],
          },
          {
            label: MENU.LOGOFF,
            icon: 'pi pi-sign-out',
          },
        ];
      })
    );
  }
}
