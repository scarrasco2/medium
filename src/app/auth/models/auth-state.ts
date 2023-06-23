import { ApiErrors } from 'src/app/shared/models/api-errors';
import { CurrentUser } from 'src/app/shared/models/current-user';

export interface AuthState {
  isSubmitting: boolean;
  currentUser: CurrentUser | null | undefined;
  isLoading: boolean;
  validationErrors: ApiErrors | null;
}
