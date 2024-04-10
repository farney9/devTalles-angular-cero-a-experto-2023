import { Component, inject } from '@angular/core';
import { MapService, PlacesService } from 'src/app/maps/services';

@Component({
  selector: 'app-location-button',
  standalone: true,
  imports: [],
  templateUrl: './location-button.component.html',
  styleUrl: './location-button.component.sass'
})
export class LocationButtonComponent {
  private placesService = inject(PlacesService);
  private mapService = inject(MapService);

  goToMyLocation() {
    if (!this.placesService.isUserLocationReady) throw 'User location not set yet!';
    if (!this.mapService.isMapReady) throw 'Map not initialized yet!';

    this.mapService.flyTo(this.placesService.userLocation!);
  }
}
