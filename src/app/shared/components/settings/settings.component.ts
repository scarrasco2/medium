import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { Store, StoreModule } from '@ngrx/store';
import { CurrentUser, CurrentUserRequest } from '../../models/current-user';
import { SettingsService } from '../../services/settings.service';
import { combineLatest } from 'rxjs';
import {
  selectIsSubmitting,
  selectValidationErrors,
  settingsFeature,
} from './store/reducers';
import { MessagesModule } from 'primeng/messages';
import { authActions } from 'src/app/auth/store/actions';
@Component({
  selector: 'medium-settings',
  standalone: true,
  imports: [
    CommonModule,
    CardModule,
    TranslateModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyPrimeNGModule,
    ButtonModule,
    MessagesModule,
  ],
  templateUrl: './settings.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SettingsComponent {
  store = inject(Store);
  service = inject(SettingsService);
  model: Partial<CurrentUser> = {};
  form = new FormGroup({});
  data$ = combineLatest({
    fields: this.service.getSettingsFields(),
    message: this.service.getSettingsErrorMessage(),
    isSubmitting: this.store.select(selectIsSubmitting),
    apiErrors: this.store.select(selectValidationErrors),
  });

  submit(): void {
    const currentUserRequest: CurrentUserRequest = {
      user: this.form.getRawValue() as any,
    };
    this.store.dispatch(authActions.updateCurrentUser({ currentUserRequest }));
  }
}
