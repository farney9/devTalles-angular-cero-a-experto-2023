import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const rtx5090 = {
  name: 'RTX5090',
  price: 2500,
  inStorage: 6
}

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styles: ``
})
export class BasicPageComponent implements OnInit {

  /*   basicForm: FormGroup = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(0),
      inStorage: new FormControl(0),
    }) */

  basicForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    inStorage: [0, [Validators.required, Validators.min(0)]]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.basicForm.reset(rtx5090);
  }

  getFieldError(field: string): string | null {
    if (!this.basicForm.controls[field]) return null;

    const errors = this.basicForm.controls[field].errors || {}

    for (const key of Object.keys(errors)) {
      switch( key ) {
        case 'required': return 'This field is required.'
        case 'minlength': return `Must have minimum ${errors['minlength'].requiredLength} characters.`
      }
    }

    return null;
  }

  isvalidField(field: string): boolean | null {
    return this.basicForm.controls[field].errors
      && this.basicForm.controls[field].touched;
  }

  onSave() {
    if (this.basicForm.invalid) {
      this.basicForm.markAllAsTouched();
      return
    }
    console.log(this.basicForm.value);

    this.basicForm.reset({ price: 0, inStorage: 0 });
  }
}
