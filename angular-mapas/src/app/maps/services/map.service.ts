import { Injectable } from '@angular/core';
import { LngLatBounds, LngLatLike, Map, Marker, Popup } from 'maplibre-gl';
import { Feature } from 'src/app/maps/interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  private map?: Map;
  private markers: Marker[] = [];

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


  createMarkersFromPlaces(places: Feature[], userLocation: [number, number]) {
    if(!this.map) throw 'Map not initialized yet!';

    this.markers.forEach((marker) => marker.remove());

    const newMarkers = [];

    for (const place of places) {
      const [lng, lat] = place.geometry?.coordinates ?? []; // Update the property access for coordinates
      const popup = new Popup()
        .setHTML(`
            <h6>${place.properties.geocoding.name}</h6>
            <span>${place.properties.geocoding.label}</span>
          `);
      const newMarker = new Marker()
        .setLngLat([lng, lat])
        .setPopup(popup)
        .addTo(this.map);

      newMarkers.push(newMarker);
    }

    this.markers = newMarkers;

    if(places.length === 0) return;


    // Limites del mapa
    const bounds = new LngLatBounds();

    newMarkers.forEach( marker => bounds.extend(marker.getLngLat()));


    this.map.fitBounds(bounds, {padding: 200});
  }




}
