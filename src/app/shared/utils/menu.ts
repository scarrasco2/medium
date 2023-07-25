import {
  LOGIN_URL,
  LOGOUT_URL,
  REGISTER_URL,
  SETTINGS_URL,
} from 'src/app/auth/auth.urls';
import { Menu } from '../models/menu';
import { MenuItem } from 'primeng/api';
import { CREATE_POST } from 'src/app/article/article.urls';

export function getMenuType(MENU: Menu, isUserLoggedIn: boolean): MenuItem[] {
  if (isUserLoggedIn)
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
            label: MENU.SETTINGS,
            icon: 'pi pi-cog',
            routerLink: SETTINGS_URL,
          },
          {
            label: MENU.NEW_POST,
            icon: 'pi pi-plus',
            routerLink: CREATE_POST,
          },
        ],
      },
      {
        label: MENU.LOGOFF,
        icon: 'pi pi-sign-out',
        routerLink: LOGOUT_URL,
      },
    ];
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
  ];
}
