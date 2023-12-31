import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { REGISTER_FIELDS } from './register.fields';
import { AUTH_REGISTER } from '../../auth.enum';
import { LOGIN_URL } from '../../auth.urls';
import { authActions } from '../../store/actions';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { Register, RegisterRequest } from '../../models/register';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'medium-register',
  templateUrl: './register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterComponent implements OnDestroy {
  store = inject(Store);
  authService = inject(AuthService);
  form = new FormGroup({});
  model: Partial<Register> = {};
  fields = REGISTER_FIELDS;
  title: string = AUTH_REGISTER.TITLE;
  link = LOGIN_URL;
  linkIcon: string = AUTH_REGISTER.LINK_ICON;
  linkText: string = AUTH_REGISTER.LINK_TEXT;
  submit: string = AUTH_REGISTER.SUBMIT;
  submitIcon: string = AUTH_REGISTER.SUBMIT_ICON;
  isRegister: boolean = true;

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    apiErrors: this.store.select(selectValidationErrors),
    message: this.authService.getAuthErrorMessage(this.isRegister),
  });

  onSubmit(): void {
    if (this.form.invalid) return;
    const request: RegisterRequest = {
      user: this.form.getRawValue() as Register,
    };
    this.store.dispatch(authActions.register({ request }));
  }

  ngOnDestroy(): void {
    this.form.reset();
  }
}
