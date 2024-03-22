import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }


  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';

  constructor( private el: ElementRef<HTMLElement>) {
    // console.log(el);
    // this.htmlElement.nativeElement.innerHTML = 'Hola mundo!';
    this.htmlElement = el;
  }

  ngOnInit() {
    this.setStyle();
  }

  setStyle() {
    this.htmlElement?.nativeElement.setAttribute('style', `color: ${this._color}`);
  }
}
