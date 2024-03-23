import { Component, signal } from '@angular/core';

interface MenuItemModel {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {

  menuItems = signal<MenuItemModel[]>([
    { title: 'Counter', route: 'counter' },
    { title: 'User Info', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ])


/*   menuItems: MenuItemModel[] = [
    { title: 'Counter', route: 'counter' },
    { title: 'User Info', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
  ]; */

  constructor() { }

}
