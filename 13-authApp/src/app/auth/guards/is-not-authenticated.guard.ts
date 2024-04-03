import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const authStatus = authService.authStatus();

  if (authStatus === AuthStatus.Authenticated) {
    router.navigateByUrl(localStorage.getItem('redirectUrl') || '/');
    return false;
  };
  return true;
};
