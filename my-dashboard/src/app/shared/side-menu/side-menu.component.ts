import { Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {

  meniItems = routes
    .map(route => route.children ?? []).flat()
    .filter(route => route && route.path !== '')
    .filter(route => !route.path?.includes(':'));

  constructor() {
    /* const dashboardRoutes = routes
      .map(route => route.children ?? []).flat()
      .filter(route => route && route.path !== '')
      .filter(route => !route.path?.includes(':'))
    */
    console.log(this.meniItems);

  }

}
