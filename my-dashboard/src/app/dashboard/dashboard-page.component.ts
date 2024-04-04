import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from '@shared/side-menu/side-menu.component';


@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styles: ``
})

/*
La clase DashboardPageComponent es una clase que se exporta como un valor predeterminado (export default). Esto significa que esta clase puede ser importada y utilizada en otros archivos de TypeScript.
 */
export default class DashboardPageComponent {



}
