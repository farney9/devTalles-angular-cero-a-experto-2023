import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


interface MenuItemModel {
  name: string;
  route: string;
}


@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.sass'
})
export class SideMenuComponent {


  menuItems: MenuItemModel[] = [
    { name: 'Full Screen', route: '/maps/full-screen' },
    { name: 'Markers', route: '/maps/markers' },
    { name: 'Properties', route: '/maps/properties' },
    { name: 'Zoom Range', route: '/maps/zoom-range' },
    { name: 'Standalone', route: '/alone' },
  ]

}
