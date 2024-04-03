import { Component, computed, effect, inject } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';
import { AuthStatus } from './auth/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  private authService = inject(AuthService);
  private router = inject(Router);

  isFinishedAuthCheck = computed<boolean>(() => {
    if (this.authService.authStatus() === AuthStatus.Checking) {
      return false;
    }
    return true;
  })

  authStatusChangedEffect = effect(() => {

    switch (this.authService.authStatus()) {

      case AuthStatus.Checking:
        break;
      case AuthStatus.Authenticated:
        const redirectUrl = localStorage.getItem('redirectUrl');
        this.router.navigateByUrl(redirectUrl!);
        break;
      case AuthStatus.Unauthenticated:
        this.router.navigateByUrl('/auth/login');
        break;
      default:
        break;
    }

    console.log('authStatusChangedEffect', this.authService.authStatus());
  });

}
