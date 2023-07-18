import { MenuItem } from 'primeng/api';
import { FeedMenu } from '../models/feed-menu';

export function getMenuType(
  MENU: FeedMenu,
  isUserLoggedIn: boolean
): MenuItem[] {
  if (isUserLoggedIn)
    return [
      {
        label: MENU.GLOBAL,
        icon: 'pi pi-globe',
      },
      {
        label: MENU.USER,
        icon: 'pi pi-user',
      },
    ];
  return [
    {
      label: MENU.GLOBAL,
      icon: 'pi pi-globe',
    },
  ];
}
