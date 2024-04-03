import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, of, tap, throwError } from 'rxjs';


import { environment } from '../../../environments/environment.development';
import { AuthStatus, CheckTokenResponse, LoginResponse, User } from '../interfaces';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly apiUrl: string = environment.apiUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.Checking);

  //! Al mundo exterior

  // Devuelve el valor actual de la señal _currentUser, currentUser es una señal computada.
  currentUser = computed(() => this._currentUser());
  // Devuelve el valor actual de la señal _authStatus, authStatus es una señal computada.
  authStatus = computed(() => this._authStatus());

  constructor() {

    this.verifyAuthStatus().subscribe();
  }

  private setAuthentication(user: User, token: string): boolean {
    // Actualiza el valor de la señal _currentUser con el valor de response.user
    this._currentUser.set(user);
    // Actualiza el valor de la señal _authStatus con el valor de AuthStatus.Authenticated
    this._authStatus.set(AuthStatus.Authenticated);
    // console.log({ user, token });
    localStorage.setItem('token', token);

    return true;

  }

  login(email: string, password: string): Observable<boolean> {

    const url = `${this.apiUrl}/auth/login`;
    const body = { email, password };

    return this.http.post<LoginResponse>(url, body)
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),

        // TODO: Manejo de errores

        // catchError recibe una función que devuelve un observable, en este caso se usa throwError para devolver un observable que emite un error.
        catchError(err => throwError(() => err.error.message))
      )
  }

  verifyAuthStatus(): Observable<boolean> {
    const url = `${this.apiUrl}/auth/renew-token`;
    const token = localStorage.getItem('token');

    if (!token) return of(false);

    const headers = { Authorization: `Bearer ${token}` };

    return this.http.get<CheckTokenResponse>(url, { headers })
      .pipe(
        map(({ user, token }) => this.setAuthentication(user, token)),
        catchError(() => {
          localStorage.removeItem('token');
          // Actualiza el valor de la señal _currentUser con el valor de null
          this._currentUser.set(null);
          // Actualiza el valor de la señal _authStatus con el valor de AuthStatus.Unauthenticated
          this._authStatus.set(AuthStatus.Unauthenticated);
          return of(false);
        })
      )

  }
}
