import { HttpClient, HttpHandler, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlacesHttpService extends HttpClient {

  baseurl = environment.API_URL;

  constructor(handler: HttpHandler) {
    super(handler);
  }

  override get<T>(
    url: string,
    options: {
      params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
      }
    }
  ) {
    url = this.baseurl + url;
    return super.get<T>(url, {
      params: {
        'limit': 15,
        'accept-language': 'es',
        'bounded': 1,
        'format': 'geocodejson',
       }
    }
  );
}
}
