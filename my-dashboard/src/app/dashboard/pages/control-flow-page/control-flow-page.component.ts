import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow-page',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow-page.component.html',
  styles: ``
})
export default class ControlFlowPageComponent {

  frameworks = signal(['Angular', 'Svelte', 'Vue', 'Qwik']);
  frameworks2 = signal([]);
  grade = signal<Grade>('A');
  showContent = signal(false);

  toggleContent() {
    this.showContent.update(value => !value);
  }
}
