import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AUTH_REGISTER } from '../../auth.enum';
import { authActions } from '../../store/actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { REGISTER_FIELDS } from './register.fields';
import { LOGIN_URL } from '../../auth.urls';
import { Register, RegisterRequest } from '../../models/register';

@Component({
  selector: 'medium-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent {
  router = inject(Router);
  store = inject(Store);
  form = new FormGroup({});
  fields = REGISTER_FIELDS;
  link = LOGIN_URL;
  linkIcon: string = AUTH_REGISTER.LINK_ICON;
  title: string = AUTH_REGISTER.TITLE;
  linkText: string = AUTH_REGISTER.LINK_TEXT;
  submit: string = AUTH_REGISTER.SUBMIT;
  submitIcon: string = AUTH_REGISTER.SUBMIT_ICON;

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    apiErrors: this.store.select(selectValidationErrors),
  });

  onSubmit(): void {
    const request: RegisterRequest = {
      user: this.form.getRawValue() as Register,
    };
    this.store.dispatch(authActions.register({ request }));
  }
}
