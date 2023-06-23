import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AUTH_FIELDS } from './auth.fields';
import { Login, LoginRequest } from '../../models/login';
import { AUTH_LOGIN } from './auth.enum';
import { authActions } from '../../store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'medium-auth',
  template: `
    <div class="grid">
      <p-card class="col-6" [header]="title | translate">
        <form [formGroup]="form">
          <formly-form
            [model]="model"
            [fields]="fields"
            [form]="form"
          ></formly-form>
        </form>
        <ng-template pTemplate="footer">
          <div class="flex justify-content-between">
            <p-button
              [label]="register | translate"
              icon="pi pi-user-plus"
              styleClass="p-button-link"
            ></p-button>
            <p-button
              [label]="submit | translate"
              type="submit"
              (click)="onSubmit()"
              icon="pi pi-sign-in"
            ></p-button>
          </div>
        </ng-template>
      </p-card>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent {
  form = new FormGroup({});
  model: Partial<Login> = {};
  fields = AUTH_FIELDS;
  title = AUTH_LOGIN.TITLE;
  register = AUTH_LOGIN.REGISTER;
  submit = AUTH_LOGIN.SUBMIT;
  store = inject(Store);
  onSubmit() {
    const request: LoginRequest = {
      user: this.form.getRawValue() as Login,
    };
    this.store.dispatch(authActions.login({ request }));
  }
}
