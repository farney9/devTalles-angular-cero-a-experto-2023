import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de Angular',
        items: [
          {
            label: 'Textos y fechas',
            icon: 'pi pi-fw pi-align-left',
            routerLink: ['/']

          },
          {
            label: 'Números',
            icon: 'pi pi-fw pi-dollar',
            routerLink: ['/numbers']
          },
          {
            label: 'No comunes',
            icon: 'pi pi-fw pi-globe',
            routerLink: ['/uncommon']
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-fw pi-cog',
          },
        ]
      }
    ];
  }
}
