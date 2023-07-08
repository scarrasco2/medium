import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { Message } from 'primeng/api';
import { Observable, map } from 'rxjs';
import { AuthMessage } from 'src/app/auth/models/auth-message';
import { selectCurrentUser } from 'src/app/auth/store/reducers';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private store: Store, private translate: TranslateService) {}
  getSettingsFields() {
    return this.store.select(selectCurrentUser).pipe(
      map((user) => {
        return [
          {
            key: 'image',
            type: 'input',
            defaultValue: user?.image,
            props: {
              placeholder: 'AUTH.IMAGE',
              required: true,
            },
          },
          {
            key: 'username',
            type: 'input',
            defaultValue: user?.username,
            props: {
              placeholder: 'AUTH.USERNAME',
              required: true,
            },
          },
          {
            key: 'bio',
            type: 'textarea',
            defaultValue: user?.bio,
            props: {
              placeholder: 'AUTH.BIO',
              required: true,
            },
          },
          {
            key: 'email',
            type: 'input',
            defaultValue: user?.email,
            props: {
              placeholder: 'AUTH.EMAIL',
              required: true,
            },
          },
          {
            key: 'password',
            type: 'input',
            props: {
              placeholder: 'AUTH.PASSWORD',
              required: true,
              type: 'password',
            },
          },
        ];
      })
    );
  }
  getErrorMessage(): Observable<Message[]> {
    return this.translate.stream('AUTH').pipe(
      map((AUTH: AuthMessage) => {
        return [
          {
            severity: 'error',
            summary: AUTH.ERROR,
            detail: AUTH.SETTINGS_FAILURE,
          },
        ];
      })
    );
  }
  getSuccessMessage(): Observable<Message[]> {
    return this.translate.stream('AUTH').pipe(
      map((AUTH: AuthMessage) => {
        return [
          {
            severity: 'success',
            summary: AUTH.SUCCESS,
            detail: AUTH.SETTINGS_SUCCESS,
          },
        ];
      })
    );
  }
}
