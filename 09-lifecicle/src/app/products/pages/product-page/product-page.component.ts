import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.sass'
})
export class ProductPageComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  isProductVisible: boolean = false;

  constructor() { console.log('constructor called'); } // 1 - constructor called

  ngOnInit() {
    console.log('ngOnInit called'); // 2 - ngOnInit called

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log({changes});

    console.log('ngOnChanges called');

  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');

  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');

  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');

  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called');

  }

}
