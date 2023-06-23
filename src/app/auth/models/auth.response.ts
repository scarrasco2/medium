import { CurrentUser } from 'src/app/shared/models/current-user';

export interface AuthResponse {
  user: CurrentUser;
}
