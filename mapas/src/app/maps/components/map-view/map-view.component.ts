import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { LngLat, Map, Popup, Marker } from 'maplibre-gl';
import { environment } from '../../../../environments/environment.development';


@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrl: './map-view.component.sass'
})
export class MapViewComponent implements AfterViewInit {

  private placesService = inject(PlacesService);
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  map?: Map;

  currrentLngLat:LngLat = new LngLat(-75.5013394, 6.082688);
  currentZoom = 18;

  key = environment.API_KEY;

  constructor() {

    console.log(this.placesService.userLocation);
  }

  ngAfterViewInit() {
    if (!this.placesService.userLocation) throw 'User location not set yet!';

    this.map = new Map({
      container: this.mapDivElement?.nativeElement,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${this.key}`, // stylesheet location
      // style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: this.currentZoom // starting zoom
    });


    const popup = new Popup()
      .setHTML(`
        <h1>My Location</h1>
        <p>Longitude: ${this.placesService.userLocation[0]}</p>
        <p>Latitude: ${this.placesService.userLocation[1]}</p>
      `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.userLocation);

  }


}
