import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit{

  @Input() set color(value: string) {
    this._color = value;
    this.setStyle();
  }

  @Input() set errors(value: ValidationErrors | null | undefined) {
    console.log(value);

    this._errors = value;
    if (this._errors) {
      this._color = 'red';
    } else {
      this._color = 'green';
    }
    this.setStyle();
    this.setErrorMessage();
  }

  private htmlElement?: ElementRef<HTMLElement>;
  private _color: string = 'red';
  private _errors?: ValidationErrors | null;

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

  setErrorMessage() {
    if (!this.htmlElement) return;
    if (!this._errors) {
      this.htmlElement.nativeElement.innerHTML = 'No hay errores';
      return;
    }

    const errors = Object.keys(this._errors);

    if (errors.includes('required')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido';
      return;
    }

    if (errors.includes('minlength')) {
      const { requiredLength } = this._errors['minlength'];
      this.htmlElement.nativeElement.innerHTML = `Este campo debe tener al menos ${requiredLength} caracteres`;
      return;
    }

    if (errors.includes('pattern')) {
      this.htmlElement.nativeElement.innerHTML = 'Este campo no tiene el formato correcto';
      return;
    }

  }
}
