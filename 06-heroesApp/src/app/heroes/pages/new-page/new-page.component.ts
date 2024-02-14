import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Publisher } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent {

  heroForm = new FormGroup({
    id:        new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true}),
    publisher: new FormControl<Publisher>(Publisher.DCCOMICS || Publisher.MARVELCOMICS),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters:new FormControl(''),
    alt_img:   new FormControl(''),
  });

  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ]

  onSubmit() {
    console.log({
      formIsValid: this.heroForm.valid,
      value: this.heroForm.value
    });

  }

}
