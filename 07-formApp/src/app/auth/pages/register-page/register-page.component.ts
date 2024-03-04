import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/helpers/email-validator.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.sass'
})

export class RegisterPageComponent {

  registerForm: FormGroup = this.fb.group({
    fullName: ['Wester Jim', [Validators.required, Validators.minLength(3), Validators.pattern(this.validatorsService.firstNameAndLastnamePattern)]],
    userName: ['farney9', [Validators.required, this.validatorsService.cantBeStrider]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['123456', [Validators.required, Validators.minLength(6)]],
    email: [
      'a@b.com',
      [Validators.required,
      Validators.pattern(this.validatorsService.emailPattern),
      [ this.emailValidatorService]]
    ],
  })


  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService
  ) { }
  onRegister() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return
    }
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }

  isvalidField(field: string) {
    return this.validatorsService.isvalidField(this.registerForm, field)
  }

}
