import { Component } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {


  isUppercase: boolean = false;


  toggleUpperCase() {
    this.isUppercase = !this.isUppercase;
  }

}
