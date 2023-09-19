import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  counter = 10;

  setValue( value: number) {
    this.counter += value;
    console.log(this.counter);
  }
  reset() {
    this.counter = 10;
  }
}
