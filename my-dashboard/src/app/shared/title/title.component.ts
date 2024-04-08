import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
  <!-- <h1 class="text-3xl font-semibold mb-5">{{title}} - {{withShadow}}</h1> -->
  <h1 class="text-3xl font-semibold mb-5" [ngClass]="{'shadow-effect': withShadow}">{{title}}</h1>
  `,
  styles: `
    .shadow-effect
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
  `
})
export class TitleComponent {

  @Input({ required: true }) title!: string;
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;

  /*
  La propiedad withShadow es un atributo de entrada (@Input) en un componente de Angular. Permite que un valor booleano se pase al componente desde su componente padre. En este caso, se establece un valor predeterminado de false para withShadow en caso de que no se proporcione ningún valor desde el componente padre.

  El atributo transform utilizado en @Input({ transform: booleanAttribute }) es un decorador que se utiliza para modificar el comportamiento predeterminado de cómo se pasa el valor al componente. En este caso, booleanAttribute es una función que transforma el valor pasado al componente en un valor booleano. Esto significa que si se pasa un valor no booleano, como una cadena o un número, se convertirá automáticamente en un valor booleano antes de asignarse a withShadow.

  En resumen, esta propiedad permite que el componente reciba un valor booleano desde su componente padre, y si no se proporciona ningún valor, se establece en false de forma predeterminada. Además, el decorador @Input con el atributo transform garantiza que cualquier valor no booleano se convierta en un valor booleano antes de asignarse a withShadow.
  */

}
