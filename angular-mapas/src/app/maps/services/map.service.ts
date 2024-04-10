import { Injectable } from '@angular/core';
import { LngLatLike, Map } from 'maplibre-gl';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;

  get isMapReady(): boolean {
    return !!this.map;
  }

  setMapInstance(map: Map) {
    this.map = map;
  }

  flyTo(cords: LngLatLike) {
    if (!this.isMapReady) throw 'Map not initialized yet!';
    this.map?.flyTo({
      center: cords,
      zoom: 15,
      essential: true,
      animate: true,
    });


  }
}
