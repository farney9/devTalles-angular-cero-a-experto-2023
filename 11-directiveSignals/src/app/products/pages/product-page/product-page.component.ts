import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.sass'
})
export class ProductPageComponent {

  // constructor( private fb: FormBuilder) { }

  private fb = inject(FormBuilder);

  emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  color = 'green'

  myForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.pattern(this.emailPattern)]],
  });

  changeColor() {
    this.color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }
}
