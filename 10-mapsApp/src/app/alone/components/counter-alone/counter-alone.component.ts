import { Component, Input } from '@angular/core';

@Component({
  selector: 'counter-alone',
  standalone: true,
  imports: [],
  templateUrl: './counter-alone.component.html',
  styleUrl: './counter-alone.component.sass'
})
export class CounterAloneComponent {

  @Input() counter = 10;

}
