import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';


import { environment } from '../../../environments/environment.development';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly url: string = environment.apiUrl;
  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);
  private _authStatus = signal<AuthStatus>(false);

  constructor() { }

  login( email: string, password: string): Observable<boolean> {
    this.http.post<User>(`${this.url}/login`, { email, password })


    return of(true);
  }

}
