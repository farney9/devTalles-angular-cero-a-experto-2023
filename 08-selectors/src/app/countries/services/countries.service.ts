import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { environment } from '../../../environments/environment.development';
import { CountryModel, Region, SmallCountry } from '../interfaces/country.interface';
import { Observable, combineLatest, map, of, tap } from 'rxjs';

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

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if (!region) return of([]);
    const url = `${this.API}/region/${region}?fields=cca3,name,borders`;
    return this.http.get<CountryModel[]>(url)
      .pipe(
        map((countries) => countries.map((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [] // ?? operador de covalencia nula es mejor que usar || [] encaso de que la propiedad llegue vacía
        }))),
        // tap( response => console.log({response}))
      );
  }

  getCountryByAlphaCode(alphaCode: string): Observable<SmallCountry> {
    // console.log({alphaCode});
    const url = `${this.API}/alpha/${alphaCode}?fields=cca3,name,borders`;

    return this.http.get<CountryModel>(url)
      .pipe(
        map((country) => ({
          name: country.name.common,
          cca3: country.cca3,
          borders: country.borders ?? [],
        }))
      )
  }

  getCountriesBordersNameByCode(borders: string[]): Observable<SmallCountry[]> {
    if (!borders || borders.length === 0) return of([]);

    const countriesRequest: Observable<SmallCountry>[] = [];

    borders.forEach((code) => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequest.push(request);
    })
    return combineLatest(countriesRequest);
  }
}
