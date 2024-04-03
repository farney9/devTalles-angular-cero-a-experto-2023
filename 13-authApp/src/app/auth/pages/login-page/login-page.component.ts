import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);

myForm = this.fb.group({
  email: ['a@b.com', [Validators.required, Validators.pattern(emailPattern)]],
  password: ['123456', [Validators.required, Validators.minLength(6)]],
});

login() {
  console.log(this.myForm.value);
  if (this.myForm.valid) {
    // Call the login service
  }
}

}
