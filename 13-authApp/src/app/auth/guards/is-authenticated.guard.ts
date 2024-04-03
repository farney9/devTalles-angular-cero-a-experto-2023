import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  // check if user is authenticated
  // if not, redirect to login page
  // return false;

  const authService = inject(AuthService);
  const router = inject(Router);
  const authStatus = authService.authStatus();


  if (authStatus === AuthStatus.Authenticated) return true;


/*   const url = state.url;
  localStorage.setItem('redirectUrl', url); */

  router.navigateByUrl('/auth/login');

  return false;

};
