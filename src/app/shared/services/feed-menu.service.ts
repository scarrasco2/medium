import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, map, switchMap } from 'rxjs';
import { MenuItem } from 'primeng/api';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
import { FeedMenu } from '../models/feed-menu';
import { getMenuType } from '../utils/feed-menu';

@Injectable({
  providedIn: 'root',
})
export class FeedService {
  constructor(private translate: TranslateService, private store: Store) {}
  getMenu(): Observable<MenuItem[]> {
    return this.store.select(selectCurrentUser).pipe(
      switchMap((user) => {
        return this.translate.stream('FEED').pipe(
          map((MENU: FeedMenu) => {
            return getMenuType(MENU, !!user);
          })
        );
      })
    );
  }
}
