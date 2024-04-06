import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title [title]="currentFramework()" />
    <pre>{{frameworkAsSignal() | json }}</pre>
    <pre>{{frameworkAsProperty | json }}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionPageComponent {

  currentFramework = computed(
    () => `Current framework: ${this.frameworkAsSignal().name}`
  );

  frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate: 2016,
  })

  frameworkAsProperty = {
    name: 'Angular',
    releaseDate: 2016,
  };

  constructor() {
    setTimeout(() => {
      this.frameworkAsSignal.update(value => ({
        ...value,
        name: 'React'
      }))

      // this.frameworkAsProperty.name = 'React';
      // console.log('Hecho');
    }, 2500);
  }

}
