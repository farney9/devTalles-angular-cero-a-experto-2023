import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-control-flow-page',
  standalone: true,
  imports: [],
  templateUrl: './control-flow-page.component.html',
  styles: ``
})
export default class ControlFlowPageComponent {

  showContent = signal(false);

  toggleContent() {
    this.showContent.update(value => !value);
  }

}
