import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {


  isUppercase: boolean = false;

  orderBy?: keyof Hero;

  heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna verde',
      canFly: true,
      color: Color.green
    },

  ]

  orderDirection: 'asc' | 'desc' = 'asc';

  toggleUpperCase() {
    this.isUppercase = !this.isUppercase;
  }

  changeOrder(value: keyof Hero) {
    // Si el orden actual es el mismo que el nuevo, cambia la dirección
    if (this.orderBy === value) {
      this.orderDirection = (this.orderDirection === 'asc') ? 'desc' : 'asc';
    } else {
      // Si es un nuevo orden, restablece la dirección a ascendente
      this.orderDirection = 'asc';
    }

    this.orderBy = value;
  }

}


