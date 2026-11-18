import { inject, Injectable } from '@angular/core';
import {environment} from '../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  private router = inject(Router);
  private readonly tokenKey = 'token';
  login(email: string, password: string) {
    return this.http
    .post<{ token: string }>(`${this.apiUrl}/auth/login`, { email, password })
    .pipe(
      tap(res => {
        localStorage.setItem(this.tokenKey, res.token);
      })
    );
  }
  get token(): string | null {
    return localStorage.getItem(this.tokenKey);
  }
  isLoggedIn(): boolean {
    return !!this.token;
  }
}
