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
}
