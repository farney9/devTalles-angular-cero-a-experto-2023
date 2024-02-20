import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable, catchError, map, of, tap } from 'rxjs';


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
        tap( response => localStorage.setItem('token', 'Asdf3455355.55352525.br34634')),
        catchError(error => of())
      )
  }

  isUserAuthenticated(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    const token = localStorage.getItem('token');

    return this.http.get<UserModel>(`${ this.url }/users/1`)
      .pipe(
        tap( user => this.user = user),
        map( user => !!user), // Si el usuario existe regreso un valor booleano eso se logra con !!user
        catchError( err => of(false))
        )
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('token');
  }
}
