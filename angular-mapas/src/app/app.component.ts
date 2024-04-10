import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MapsPageComponent } from './maps/pages/maps-page/maps-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MapsPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'angular-mapas';
}
