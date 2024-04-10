import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Feature, PlacesResponse } from 'src/app/maps/interfaces/places.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private http = inject(HttpClient);

  userLocation?: [number, number];
  isLoading = false;
  places: Feature[] = [];

  /*
  En el código, return !!this.userLocation; se utiliza para verificar si this.userLocation tiene un valor asignado. Si this.userLocation tiene un valor, la expresión !!this.userLocation se evaluará como true. Si this.userLocation es null, undefined, 0, false o una cadena vacía, la expresión se evaluará como false.

  Esta técnica es útil cuando se desea convertir un valor en un booleano de forma explícita y concisa.
  */
  get isUserLocationReady(): boolean {
    return !!this.userLocation;
  }

  constructor() {
    this.getUserLocation();
  }

  async getUserLocation(): Promise<[number, number]> {
    try {
      this.isLoading = true;
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { enableHighAccuracy: true });
      });
      const { longitude, latitude } = position.coords;
      this.userLocation = [longitude, latitude];
      this.isLoading = false;
      return this.userLocation;
    } catch (error) {
      this.isLoading = false;
      alert('Error getting location');
      console.log('Error getting location', error);
      throw error;
    }
  }

  findPlacesByQuery(query: string='') {
    // TODO: Evaluar cuando el query es nulo
    this.isLoading = true;

    this.http.get<PlacesResponse>(`https://nominatim.openstreetmap.org/search?q=${query}&format=geocodejson&limit=15`)
      .subscribe((response) => {
        this.isLoading = false;
        this.places = response.features
      });
  }
}
