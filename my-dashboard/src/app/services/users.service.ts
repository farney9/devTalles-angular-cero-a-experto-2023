import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import type { User, UserModel, UserResponse } from '@interfaces/req-response.interface';
import { delay, map } from 'rxjs';


interface State {
  users: User[];
  isLoading: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject(HttpClient);

  /*
  La almohadilla (#) antes de la declaración de la señal indica que se trata de una propiedad privada en TypeScript. Esto significa que solo se puede acceder a la propiedad dentro de la clase en la que está declarada.
  */

  #state = signal<State>({
    isLoading: true,
    users: [],
  });

  public users = computed( () => this.#state().users);
  public isLoading = computed( () => this.#state().isLoading);

  constructor() {

    this.http.get<UserModel>('https://reqres.in/api/users/')
      .pipe( delay(1300))
      .subscribe( {
        next: (response) => {
          this.#state.set({
            users: response.data,
            isLoading: false,
          })
        },
        error: (error) => {
          console.error(error);
        }
      })
  }

  getUserById(id: string) {
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
    .pipe(
      delay(1300),
      map(resp => resp.data)
    )
  }
}
