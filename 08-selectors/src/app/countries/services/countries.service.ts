import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../../environments/environment.development';
import { Region, SmallCountry } from '../interfaces/country.interface';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private API = environment.apiUrl;
  private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania]


  constructor(private http: HttpClient) { }

  get regions(): Region[] {
    return [...this._regions];
  }

  getCountriesByRegion( region: Region): Observable<SmallCountry[]> {

    if (!region) return of([]);

    const url = `${this.API}/region/${region}?fields=cca3,name,borders`
    return this.http.get<SmallCountry[]>(url)
      .pipe(
        tap( response => console.log({response}))
      )
  }
}
