import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styles: ``
})
export class DynamicPageComponent {

  dynamicForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  })

  constructor(private fb: FormBuilder) { }

  get favoriteGames() {
    return this.dynamicForm.get('favoriteGames') as FormArray;
  }

  getFieldError(field: string): string | null {
    if (!this.dynamicForm.controls[field]) return null;

    const errors = this.dynamicForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch( key ) {
        case 'required': return 'This field is required.'
        case 'minlength': return `Must have minimum ${errors['minlength'].requiredLength} characters.`
      }
    }

    return null;
  }

  isvalidFieldinArray(formArray: FormArray, idx: number): boolean | null {
    return formArray.controls[idx].errors
        && formArray.controls[idx].touched;
  }

  isvalidField(field: string): boolean | null {
    return this.dynamicForm.controls[field].errors
      && this.dynamicForm.controls[field].touched;
  }

  onDeletefavorite(idx: number) {
    this.favoriteGames.removeAt(idx);
  }


  onSubmit() {
    if (this.dynamicForm.invalid) {
      this.dynamicForm.markAllAsTouched();
      return
    }
    console.log(this.dynamicForm.value);

    this.dynamicForm.reset();
  }

}
