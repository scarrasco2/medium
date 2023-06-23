import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Register, RegisterRequest } from '../models/register';
import {
  CurrentUser,
  CurrentUserRequest,
} from 'src/app/shared/models/current-user';
import { LoginRequest } from '../models/login';
import { ApiErrors } from 'src/app/shared/models/api-errors';
export const authActions = createActionGroup({
  source: 'Auth',
  events: {
    Register: props<{ request: RegisterRequest }>(),
    'Register success': props<{ currentUser: CurrentUser }>(),
    'Register failure': props<{ errors: ApiErrors }>(),

    Login: props<{ request: LoginRequest }>(),
    'Login success': props<{ currentUser: CurrentUser }>(),
    'Login failure': props<{ errors: ApiErrors }>(),

    'Get current user': emptyProps(),
    'Get current user success': props<{ currentUser: CurrentUser }>(),
    'Get current user failure': emptyProps(),

    'Update current user': props<{
      currentUserRequest: CurrentUserRequest;
    }>(),
    'Update current user success': props<{
      currentUser: CurrentUser;
    }>(),
    'Update current user failure': props<{ errors: ApiErrors }>(),

    Logout: emptyProps(),
  },
});
