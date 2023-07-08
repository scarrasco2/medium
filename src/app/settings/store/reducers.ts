import { routerNavigationAction } from '@ngrx/router-store';
import { createFeature, createReducer, on } from '@ngrx/store';
import { authActions } from 'src/app/auth/store/actions';
import { ApiErrors } from 'src/app/shared/models/api-errors';

interface SettingsState {
  isSubmitting: boolean;
  validationErrors: ApiErrors | null;
  updateSuccess: boolean;
}

const initialState: SettingsState = {
  isSubmitting: false,
  validationErrors: null,
  updateSuccess: false,
};

export const settingsFeature = createFeature({
  name: 'settings',
  reducer: createReducer(
    initialState,
    on(authActions.updateCurrentUser, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(authActions.updateCurrentUserSuccess, (state) => ({
      ...state,
      isSubmitting: false,
      updateSuccess: true,
    })),
    on(authActions.updateCurrentUserFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: settingsFeatureKey,
  reducer: settingsReducer,
  selectValidationErrors,
  selectIsSubmitting,
  selectUpdateSuccess,
} = settingsFeature;
