import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches-page',
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit{

  switchesForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required ],
    wantNotifications: [ true, Validators.required ],
    termsAndConditions: [ false, Validators.requiredTrue ],
  });

  person = {
    gender: 'F',
    wantNotifications: false,
  }

  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.switchesForm.reset(this.person);
  }

  onSave() {
    if (this.switchesForm.invalid) {
      this.switchesForm.markAllAsTouched();
      return
    }

    const { termsAndConditions, ... newPerson } = this.switchesForm.value

    this.person = newPerson;
    console.log(this.switchesForm.value);
    console.log(this.person);

    // this.switchesForm.reset();
  }

  isvalidField(field: string): boolean | null {
    return this.switchesForm.controls[field].errors
      && this.switchesForm.controls[field].touched;
  }

}
