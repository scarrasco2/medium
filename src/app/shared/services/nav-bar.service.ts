import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map, switchMap } from 'rxjs';
import { Menu } from '../models/menu';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
import { getMenuType } from '../utils/menu';

@Injectable({
  providedIn: 'root',
})
export class NavBarService {
  constructor(private translate: TranslateService, private store: Store) {}
  getMenu(): Observable<MenuItem[]> {
    return this.store.select(selectCurrentUser).pipe(
      switchMap((user) => {
        return this.translate.stream('MENU').pipe(
          map((MENU: Menu) => {
            return getMenuType(MENU, !!user);
          })
        );
      })
    );
  }
}
