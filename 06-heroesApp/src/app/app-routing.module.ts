import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './shared/pages/not-found-page/not-found-page.component';
import { publicAuthCanActivate, publicAuthCanMatch } from './auth/guards/public.guard';
import { authCanActivate, authCanMatch } from './auth/guards/auth.guard';


// localhost:4200/auth/''
const routes: Routes = [

  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    canActivate:[ publicAuthCanActivate ],
    canMatch: [ publicAuthCanMatch ]
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    canActivate:[ authCanActivate ],
    canMatch: [ authCanMatch ]
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
