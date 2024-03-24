import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { SingleUserResponse, User } from '../interfaces/user.response..interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);
  private apiUrl = 'https://reqres.in/api/users';

  getUserById(id: number):Observable<User> {
    return this.http.get<SingleUserResponse>(`${this.apiUrl}/${id}`)
      .pipe(
        map(resp => resp.data),
      );
  }

}
