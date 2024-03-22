import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';

@Component({
  selector: 'maps-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.sass']
})
export class MiniMapComponent implements AfterViewInit {
  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;


  ngAfterViewInit(): void {
    if (!this.lngLat) throw 'The lngLat input value is required';

    this.initializeMap();
  }

  private initializeMap() {
    if (!this.divMap) throw 'The HTML element was not found';

    const map = new Map({
      container: this.divMap.nativeElement,
      style: './assets/maplibre-gl-styles.json',
      center: this.lngLat,
      zoom: 7,
      interactive: false
    });

    new Marker()
      .setLngLat(this.lngLat ?? [0, 0])
      .addTo(map);
  }
}
