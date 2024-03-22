import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'maplibre-gl';

interface MarkerModel {
  color: string;
  marker: Marker
}
interface PlainMarkerModel {
  color: string;
  lngLat: number[];
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.sass'
})
export class MarkersPageComponent implements AfterViewInit, OnDestroy {

  @ViewChild('map') divMap?: ElementRef;

  currentZoom = 4;
  map?: Map;
  currrentLngLat: LngLat = new LngLat(-75.55, 6.22);
  markersList: MarkerModel[] = [];

  ngAfterViewInit() {
    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement,
      style: './assets/maplibre-gl-styles.json', // stylesheet location
      // style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
      center: this.currrentLngLat, // starting position [lng, lat]
      zoom: this.currentZoom // starting zoom
    });

    this.readFromLocalStorage();
  }

  createMarker() {
    if (!this.map) return;

    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat, color);
    // console.log(this.markersList);

  }

  addMarker(lngLat: LngLat, color: string = 'red') {
    if (!this.map) return;

    const marker = new Marker({
      color: color,
      draggable: true
    })
      .setLngLat(lngLat)
      .addTo(this.map!);

    this.markersList.push({ color, marker });
    this.saveToLocalStorage();

    marker.on('dragend', () => {
      console.log(marker.getLngLat());

      this.saveToLocalStorage();
    });
  }

  deleteMarker(index: number) {
    if (!this.map) return;

    this.markersList[index].marker.remove();
    this.markersList.splice(index, 1);
    this.saveToLocalStorage();
  }

  flyToMarker(marker: MarkerModel) {
    this.map?.flyTo({
      center: marker.marker.getLngLat(),
      essential: true,
      zoom: 6,
      animate: true,
    });
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarkerModel[] = this.markersList.map(({ color, marker }) => {
      return {
        color,
        lngLat: marker.getLngLat().toArray()
      }
    });
    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));

  }

  readFromLocalStorage() {
    const plainMarkers = localStorage.getItem('plainMarkers') ?? '[]';
    const markers: PlainMarkerModel[] = JSON.parse(plainMarkers);
    // console.log({ markers });

    markers.forEach(({lngLat, color}) => {
      const [lng, lat] = lngLat;
      const coords = new LngLat(lng, lat);
      this.addMarker(coords, color);
    });
  }

  ngOnDestroy() {
    // if (this.map) this.map.remove();
  }
}
