import { Component } from '@angular/core';


interface MenuItemModel {
  name: string;
  route: string;
}


@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {


  menuItems: MenuItemModel[] = [
    {
      name: 'Full Screen',
      route: '/maps/full-screen'
    },
    {
      name: 'Markers',
      route: '/maps/markers'
    },
    {
      name: 'Houses',
      route: '/maps/properties'
    },
    {
      name: 'Zoom Range',
      route: '/maps/zoom-range'
    }
  ]

}
