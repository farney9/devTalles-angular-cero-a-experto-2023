import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-slow',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section [ngClass]="['w-full h-[600px]', cssClass]">
  Heavy Loaders Slow
  </section>
  `,
})
export class HeavyLoadersSlowComponent {

  @Input({ required: true}) cssClass!: string;


  constructor () {

    const start = Date.now();

    while (Date.now() - start < 1500) {
      console.log('Cargado');

    }


    console.log('Heavy Loaders Slow Component');
  }
}
