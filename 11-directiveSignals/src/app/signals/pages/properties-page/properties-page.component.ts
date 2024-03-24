import { Component, OnDestroy, OnInit, computed, effect, signal } from '@angular/core';
import { User } from '../../interfaces/user.response..interface';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrl: './properties-page.component.sass'
})
export class PropertiesPageComponent implements OnInit, OnDestroy {



  counter = signal(10);

  user = signal<User>({
    id: 1,
    email: 'george.bluth@reqres.in',
    first_name: 'George',
    last_name: 'Bluth',
    avatar: 'https://reqres.in/img/faces/1-image.jpg'
  })

  public fullName = computed(() => `${this.user().first_name} ${this.user().last_name}`);


  userChangedEffect = effect(() => {
  /**
  * Representa el efecto que se activa cuando el usuario cambia.
  * Este efecto registra el nombre del usuario y el valor actual del contador en la consola.
  */
    console.log(`${this.user().first_name} - ${this.counter()} `);

  });

  ngOnInit(): void {
    setInterval( () => {
      this.counter.update( current => current + 1 );

      if ( this.counter() == 13 )
        this.userChangedEffect.destroy();
    }, 1000 );
  }

  ngOnDestroy(): void {
    // this.userChangedEffect.destroy();
  }

  increaseBy( value: number ) {
    this.counter.update( current => current + value );
  }

  onFieldUpdated(field: keyof User, value: string) {
    /*  Una Forma de hacerlo */
    /* Esta línea de código en TypeScript se utiliza para actualizar una propiedad específica en un objeto user. Veamos paso a paso qué hace:
    this.user() es una llamada a una función user que devuelve un objeto. Supongamos que esta función devuelve un objeto con varias propiedades, como name, age, etc.
    { ...this.user(), [field]: value } es una expresión que crea un nuevo objeto utilizando el operador de propagación (...) para copiar todas las propiedades del objeto user existente. Luego, se agrega una nueva propiedad [field] con el valor value. Aquí, [field] es una sintaxis de TypeScript que permite utilizar una variable como nombre de propiedad.
    Finalmente, this.user.set() es una llamada a un método set() en el objeto user. Este método se encarga de actualizar el objeto user con el nuevo objeto creado en el paso anterior. */

    // this.user.set({ ...this.user(), [field]: value });


    this.user.update( current => ({ ...current, [field]: value }));


/*     this.user.update(current => {
      switch (field) {
        case 'first_name':
          current.first_name = value;
          break;
        case 'last_name':
          current.last_name = value;
          break;
        case 'email':
          current.email = value;
          break;
        case 'avatar':
          current.avatar = value;
          break;
        case 'id':
          current.id = Number(value);
          break;
      }
      return current;
    }); */
  }



}
