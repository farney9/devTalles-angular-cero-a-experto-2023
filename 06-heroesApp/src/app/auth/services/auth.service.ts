import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable, catchError, of, tap } from 'rxjs';


import { environment } from '../../../environments/environment.development';
import { UserModel } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl;
  private user?: UserModel

  constructor( private readonly http: HttpClient) { }

  get currentUser(): UserModel | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user); // Solucion que tiene JavaScripit para realizar un clone Profundo DeepClone
  }

  login( email: string, password: string): Observable<UserModel> {

  // http.post('login', { email, password})

    return this.http.get<UserModel>(`${this.url}/users/1`)
      .pipe(
        tap( response => this.user = response),
        tap( response => localStorage.setItem('token', response.id.toString())),
        catchError(error => of())
      )
  }
}
