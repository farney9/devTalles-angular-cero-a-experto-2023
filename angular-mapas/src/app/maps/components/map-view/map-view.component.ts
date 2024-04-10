import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { PlacesService } from '../../services';
import { environment } from '@environments/environment.development';
import { NgIf } from '@angular/common';
import { FloatingCardComponent } from 'src/app/maps/components/floating-card/floating-card.component';
import { LngLat, Map, Marker, Popup } from 'maplibre-gl';


@Component({
  selector: 'app-map-view',
  standalone: true,
  // templateUrl: './map-view.component.html',
  template: `
  <div #mapDiv class="map-container"></div>
  `,
  styleUrl: './map-view.component.sass',
  imports: [
    NgIf,
    FloatingCardComponent,
  ],

})
export class MapViewComponent implements OnInit, AfterViewInit {

  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  map?: Map;
  currrentLngLat:LngLat = new LngLat(-75.5013394, 6.082688);
  currentZoom = 14;
  key = environment.API_KEY;
  color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));

  public placesService = inject(PlacesService);

  ngOnInit() {
    // console.log(this.placesService.userLocation);
  }

  ngAfterViewInit() {
    if (!this.placesService.userLocation) throw 'User location not set yet!';

    const map = new Map({
      container: this.mapDivElement?.nativeElement,
      style: `https://api.maptiler.com/maps/streets/style.json?key=${this.key}`, // stylesheet location
      // style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
      center: this.placesService.userLocation, // starting position [lng, lat]
      zoom: this.currentZoom // starting zoom
    });

    const popup = new Popup()
      .setHTML(`
        <h6>My Location</h6>
        <span>Longitude: ${this.placesService.userLocation[0]}</span>
        <br>
        <span>Latitude: ${this.placesService.userLocation[1]}</span>
      `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesService.userLocation)
      .setPopup(popup)
      .addTo( map )


      this.map = map;
    // console.log('Map:', this.map);

  }
}
