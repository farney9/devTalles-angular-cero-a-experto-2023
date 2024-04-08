import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req-response.interface';


interface State {
  user: User[];
  isLoading: boolean;

}



@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /*
  La almohadilla (#) antes de la declaración de la señal indica que se trata de una propiedad privada en TypeScript. Esto significa que solo se puede acceder a la propiedad dentro de la clase en la que está declarada.
  */

  #state = signal<State>({
    isLoading: true,
    user: [],
  });

  constructor() {

    console.log('Cargando data..');


  }
}
