import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.sass'
})
export class CounterPageComponent {
  counter = signal(5);
  squareCounter = computed(() => this.counter() ** 2); // 25 = 5^2

  increaseBy(value: number) {
    this.counter.update((current) => current + value );
  }


}
