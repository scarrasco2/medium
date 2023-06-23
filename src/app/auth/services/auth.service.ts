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
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(response: AuthResponse): CurrentUser {
    return response.user;
  }

  getCurrentUser(): Observable<CurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http.get<AuthResponse>(url).pipe(map(this.getUser));
  }

  register(data: Register): Observable<CurrentUser> {
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
}
