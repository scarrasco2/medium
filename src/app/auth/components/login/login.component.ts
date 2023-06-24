import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RegisterComponent } from '../register/register.component';
import { LOGIN_FIELDS } from './login.fields';
import { AUTH_LOGIN } from '../../auth.enum';
import { REGISTER_URL } from '../../auth.urls';
import { Login, LoginRequest } from '../../models/login';
import { authActions } from '../../store/actions';

@Component({
  selector: 'medium-login',
  templateUrl: '../register/register.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent extends RegisterComponent {
  override fields = LOGIN_FIELDS;
  override link = REGISTER_URL;
  override linkIcon = AUTH_LOGIN.LINK_ICON;
  override linkText = AUTH_LOGIN.LINK_TEXT;
  override title = AUTH_LOGIN.TITLE;
  override submit = AUTH_LOGIN.SUBMIT;
  override submitIcon = AUTH_LOGIN.SUBMIT_ICON;

  override onSubmit() {
    if (this.form.invalid) return;
    const request: LoginRequest = {
      user: this.form.getRawValue() as Login,
    };
    this.store.dispatch(authActions.login({ request }));
  }
}
