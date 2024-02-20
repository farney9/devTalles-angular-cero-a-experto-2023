import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  constructor(
    private readonly authService: AuthService,
    private router: Router
  ) {}


  onLogin() {
    this.authService.login('farney9@gmail.com', 'abc123')
      .subscribe( userResponse => {
        this.router.navigate(['/']);
      })
  }

}
