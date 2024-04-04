import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'F';

@Component({
  selector: 'app-control-flow-page',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-page.component.html',
  styles: ``
})
export default class ControlFlowPageComponent {

  showContent = signal(false);
  grade = signal<Grade>('A');

  toggleContent() {
    this.showContent.update(value => !value);
  }

}
