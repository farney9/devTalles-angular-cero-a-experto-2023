import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard-page.component'),
    children: [
      {
        path: 'change-detection',
        title: 'Change Detection',
        loadComponent: () => import('./dashboard/pages/change-detection-page/change-detection-page.component'),
      },
      {
        path: 'control-flow',
        title: 'Control Flow',
        loadComponent: () => import('./dashboard/pages/control-flow-page/control-flow-page.component'),
      },
      {
        path: 'defer-options',
        title: 'Defer Options',
        loadComponent: () => import('./dashboard/pages/defer-options-page/defer-options-page.component'),
      },
      {
        path: 'defer-views',
        title: 'Defer Views',
        loadComponent: () => import('./dashboard/pages/defer-views-page/defer-views-page.component'),
      },
      {
        path: 'user-list',
        title: 'User List',
        loadComponent: () => import('./dashboard/pages/user-list-page/user-list-page.component'),
      },
      {
        path: 'user/:id',
        title: 'User',
        loadComponent: () => import('./dashboard/pages/user-page/user-page.component'),
      },
      {
        path: 'view-transition-1',
        title: 'View Transition 1',
        loadComponent: () => import('./dashboard/pages/view-transition-page/view-transition-page1.component'),
      },
      {
        path: 'view-transition-2',
        title: 'View Transition 2',
        loadComponent: () => import('./dashboard/pages/view-transition-page/view-transition-page2.component'),
      },
      {
        path: '', redirectTo: 'control-flow', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'control-flow'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }

];
