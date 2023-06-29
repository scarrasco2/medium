import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  CurrentUser,
  CurrentUserRequest,
} from 'src/app/shared/models/current-user';
import { LoginRequest } from '../models/login';
import { AuthResponse } from '../models/auth.response';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from '../models/register';
import { TranslateService } from '@ngx-translate/core';
import { AuthMessage } from '../models/auth-message';
import { Message } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private translate: TranslateService) {}

  getUser(response: AuthResponse): CurrentUser {
    return response.user;
  }

  getCurrentUser(): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http.get<AuthResponse>(url).pipe(map(this.getUser));
  }

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: LoginRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<AuthResponse>(url, data).pipe(map(this.getUser));
  }

  updateCurrentUser(
    currentUserRequest: CurrentUserRequest
  ): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http
      .put<AuthResponse>(url, currentUserRequest)
      .pipe(map(this.getUser));
  }

  getMessage(): Observable<Message[]> {
    return this.translate.stream('AUTH').pipe(
      map((AUTH: AuthMessage) => {
        return [
          {
            severity: 'success',
            summary: AUTH.SUCCESS,
            detail: AUTH.LOGOUT_MESSAGE,
          },
        ];
      })
    );
  }
}
