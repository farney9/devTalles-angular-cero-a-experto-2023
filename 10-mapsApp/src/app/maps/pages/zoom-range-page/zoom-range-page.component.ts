import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'maplibre-gl';

@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.sass'
})
export class ZoomRangePageComponent implements AfterViewInit {

  @ViewChild('map') divMap?: ElementRef;

  currentZoom = 4;
  map?: Map;

  ngAfterViewInit(): void {

    if (!this.divMap) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap?.nativeElement,
      style: 'https://demotiles.maplibre.org/style.json', // stylesheet location
      center: [-75.55, 6.22], // starting position [lng, lat]
      // center: [-75.5599231, 6.2251537], // starting position [lng, lat]
      zoom: this.currentZoom // starting zoom
    });
    this.maplisteners();
  }

  maplisteners() {
    if (!this.map) throw 'Mapa no inicializado';
    this.map?.on('zoom', (event) => {
      this.currentZoom = this.map?.getZoom() ?? 0;
    });

    this.map?.on('zoomend', (event) => {
      if (this.map!.getZoom() < 7) return
      this.map!.zoomTo(7);
    });
  }

  onZoomChange(event: any) {
    if (!this.map) throw 'Mapa no inicializado';
    const zoom = +event.target.value;
    this.map?.zoomTo(zoom);
  }

  zoomIn() {
    if (!this.map) throw 'Mapa no inicializado';
    this.map?.zoomIn();
  }
  zoomOut() {
    if (!this.map) throw 'Mapa no inicializado';
    this.map?.zoomOut();
  }

}
