import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  CurrentUser,
  CurrentUserRequest,
} from '../../shared/models/current-user';
import { SettingsService } from '../services/settings.service';
import { combineLatest } from 'rxjs';
import {
  selectIsSubmitting,
  selectUpdateSuccess,
  selectValidationErrors,
} from '../store/reducers';
import { authActions } from 'src/app/auth/store/actions';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'medium-settings',
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
    success: this.store.select(selectUpdateSuccess),
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
