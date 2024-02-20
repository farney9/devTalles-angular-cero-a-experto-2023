import { inject } from '@angular/core';
import { ActivatedRouteSnapshot,  Route, RouterStateSnapshot, UrlSegment, CanMatchFn, CanActivateFn, Router} from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

const checkAuthStatus = (): boolean | Observable<boolean> => {

  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isUserAuthenticated()
    .pipe(
      tap((isAuth) => {
        if (isAuth) router.navigate(['./']);
      }),
      map(isAuth => !isAuth)
    );
};

export const publicAuthCanMatch: CanMatchFn = ( route: Route, urlSegments: UrlSegment[]) => {
  return checkAuthStatus();
};

export const publicAuthCanActivate: CanActivateFn = ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return checkAuthStatus();
}
