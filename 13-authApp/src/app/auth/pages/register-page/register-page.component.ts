import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { emailPattern } from '../../interfaces';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router);

  registerForm = this.fb.group({
    email: ['01-wester@google.com', [Validators.required, Validators.pattern(emailPattern)]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
    name: ['01-wester', [Validators.required, Validators.minLength(3)]],
  });

  register() {
    if (this.registerForm.invalid) return;

    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;
    const name = this.registerForm.value.name;

    if (!email || !password || !name) return;

    this.authService.register(email, password, name)
      .subscribe({
        next: () => this.router.navigateByUrl('/dashboard'),
        error: (message) => {
          // Swal.fire('Error', message, 'error');
          Swal.fire({
            title: "Error!",
            html: `<h5>${message}</h5><br><span><strong>Do you want Login?</strong></span>`,
            icon: "error",
            showCancelButton: true,
/*             confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33", */
            confirmButtonText: "Yes, let's go!"
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigateByUrl('/auth/login');
            }
          });
        }
      });
  }

}
