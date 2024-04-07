import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-page',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title title="View Transition Page 2" />

  <section class="flex justify-start">

  <img srcset="//picsum.photos/id/237/300/200.webp" width="300" height="200" alt="PicSum Photos">

  <div class="bg-blue-500 w-56 h-56">

  </div>
  </section>

  `,
  styles: ``
})
export default class ViewTransitionPageComponent {

}
