import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-hero-page',
  templateUrl: './layout-hero-page.component.html',
  styles: ``
})
export class LayoutHeroPageComponent {

  sidebarItems = [
    { label: 'Listado', icon: 'label', url: './list'},
    { label: 'Agregar', icon: 'add', url: './new-hero'},
    { label: 'Buscar', icon: 'search', url: './search'},
  ]

}
