import { Component, inject } from '@angular/core';
import { PlacesService } from '../../services';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.sass'
})
export class MapViewComponent {

  private placesService = inject(PlacesService);

  constructor() {
    console.log(this.placesService.userLocation);

  }


}
