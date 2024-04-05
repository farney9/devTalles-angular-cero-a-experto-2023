import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow-page',
  standalone: true,
  imports: [CommonModule],
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

/* if (first || last) {
      return 'text-blue-800 font-bold';
    } else if (even) {
      return 'text-red-800 font-bold';
    } else if (odd) {
      return 'text-green-800 font-bold';
    }
    return '';
  } */

  


}
