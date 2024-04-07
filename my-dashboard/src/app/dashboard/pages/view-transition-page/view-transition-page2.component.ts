import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition-page',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title title="View Transition Page 2" />

  <section class="flex justify-end">

  <img
    srcset="//picsum.photos/id/237/300/200.webp"
    width="300"
    height="200"
    alt="PicSum Photos"
    style="view-transition-name: hero1;"
    >

  <div
    class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
    style="view-transition-name: hero2;"
    >

  </div>
  </section>

  `,
  styles: ``
})
export default class ViewTransitionPageComponent {

}
