import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {

  menuItems = routes
    .map(route => route.children ?? []).flat()
    .filter(route => route && route.path !== '')
    .filter(route => !route.path?.includes(':'));

  constructor() {
    // console.log(this.menuItems);
  }
}
