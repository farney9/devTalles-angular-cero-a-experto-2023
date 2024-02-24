import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.sass'
})

export class RegisterPageComponent {

  registerForm: FormGroup = this.fb.group({
    fullName: ['asd123', [Validators.required, Validators.minLength(3)]],
    userName: ['farney9', [Validators.required, Validators.minLength(3)]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['123456', [Validators.required, Validators.minLength(6)]],
    email: ['a@b.com', [Validators.required, Validators.pattern(emailPattern)]],
  })


  constructor(private fb: FormBuilder) { }
  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return
    }
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  // TODO: Obtener validación desde un servicio
  isvalidField(field: string): boolean | null {
    return this.registerForm.controls[field].errors
      && this.registerForm.controls[field].touched;
  }

}
