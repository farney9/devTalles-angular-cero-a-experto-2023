import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  userLocation?: [number, number];
  isLoading = false;

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
    this.isLoading = true;
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({coords}) => {
          this.userLocation = [coords.longitude, coords.latitude ];
          this.isLoading = false;
          resolve(this.userLocation);
          // console.log(this.userLocation);

        },
        (error) => {
          this.isLoading = false;
          alert('Error getting location');
          console.log('Error getting location', error);
          reject(error);
        }
      );
    });
  }
}
