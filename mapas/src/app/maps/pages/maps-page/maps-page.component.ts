import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-maps-page',
  templateUrl: './maps-page.component.html',
  styleUrl: './maps-page.component.sass'
})
export class MapsPageComponent {

  private placesService = inject(PlacesService);

  get isUserLocationReady(): boolean {
    return this.placesService.isUserLocationReady;
  }

}
