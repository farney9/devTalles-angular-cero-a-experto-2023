import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.sass'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input() price: number = 0;

  intervalSubscription?: Subscription;

  ngOnInit(): void {
    console.log('Componente HIJO ngOnInit called!');

    this.intervalSubscription = interval(1000).subscribe((value) => console.log(`Actualizando el valor: ${value}`));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO ngOnChanges called!');
    console.log({changes});

  }
  ngOnDestroy(): void {
    console.log('Componente HIJO ngOnDestroy called!');
    this.intervalSubscription?.unsubscribe();

  }


}
