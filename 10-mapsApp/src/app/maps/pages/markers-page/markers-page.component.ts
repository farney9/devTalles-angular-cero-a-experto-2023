import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';


@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.sass'
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  currentZoom = 4;
  map?: Map;
  currrentLngLat:LngLat = new LngLat(-75.55, 6.22);

  ngAfterViewInit() {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement,
      style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
      center: this.currrentLngLat, // starting position [lng, lat]
      // center: [-75.5599231, 6.2251537], // starting position [lng, lat]
      zoom: this.currentZoom // starting zoom
    });

/*     const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'Hola Mundo';

    const marker = new Marker({
      color: 'red',
      draggable: true,
      element: markerHtml
    }).setLngLat(this.currrentLngLat)
    .addTo(this.map); */
  }

  ngOnDestroy() {
    // if (this.map) this.map.remove();
  }
}
