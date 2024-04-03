import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  myForm = this.fb.group({
    email: ['farney@google.com', [Validators.required, Validators.pattern(emailPattern)]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  login() {
    if (this.myForm.invalid) return;

    const email = this.myForm.value.email;
    const password = this.myForm.value.password;

    if (!email || !password) return;

    this.authService.login(email, password)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          Swal.fire('Error', message, 'error');
        }
      });
  }
}
