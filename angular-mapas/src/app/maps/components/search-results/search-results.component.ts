import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { Feature } from 'src/app/maps/interfaces/places.interface';
import { MapService, PlacesService } from 'src/app/maps/services';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.sass'
})
export class SearchResultsComponent {

  selectedPlaceId: number = 0;

  private placesService = inject(PlacesService);
  private mapsService = inject(MapService);

  get isLoadingPlaces(): boolean {
    return this.placesService.isLoading;
  }

  get places(): Feature[] {
    return this.placesService.places;
  }

  flyToPlace(place: Feature): void {
    this.selectedPlaceId = place.properties.geocoding.place_id;
    const [lng, lat] = place.geometry.coordinates;
    this.mapsService.flyTo([lng, lat]);
  }

  getDirections(place: Feature) {
    if(!this.placesService.userLocation) throw 'User location not ready';

    const start = this.placesService.userLocation;
    const end = place.geometry.coordinates as [number, number];

    this.mapsService.getRouteBetweenPoints(start, end);
  }

}
