import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.sass'
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input() price: number = 0;

  ngOnInit(): void {
    console.log('Componente HIJO ngOnInit called!');

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente HIJO ngOnChanges called!');
    console.log({changes});

  }
  ngOnDestroy(): void {
    console.log('Componente HIJO ngOnDestroy called!');

  }


}
