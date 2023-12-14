import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';
import { CacheStoreModel } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })

export class CountriesService {

  private API = environment.apiUrl;
  cacheStore: CacheStoreModel = {
    byCapital: {term: '', countries:[]},
    byCountries: {term: '', countries:[]},
    byRegion: {region: '', countries:[]},
  }

  constructor(private http: HttpClient) {}

  private getCountriesRequest(url: string): Observable<CountryResponse[]> {
    return this.http.get<CountryResponse[]>(url)
      // Tap desencadena un efecto secundario
      // tap( countries => console.log('pasó por el tap', countries)),
      //Si hay error regresa un nuevo observable de un array vacío
    .pipe(
      catchError( () => of([])),
      // delay(1500)
    )
  }

  searchByCapital(term: string): Observable<CountryResponse[]> {
    const url = `${this.API}/capital/${term}`
    return this.getCountriesRequest(url)
        .pipe(
          // tap dispara un efecto secundario
          tap( countries => this.cacheStore.byCapital = { term, countries}),
        )
  }
  searchByCountry(term: string): Observable<CountryResponse[]> {
    const url = `${this.API}/name/${term}`
    return this.getCountriesRequest(url)
    .pipe(
      // tap dispara un efecto secundario
      tap( countries => this.cacheStore.byCountries = { term, countries}),
    )
  }
  searchByRegion(region: Region): Observable<CountryResponse[]> {
    const url = `${this.API}/region/${region}`
    return this.getCountriesRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries}),
    )
  }
  searchByAlphaCode(code: string): Observable<CountryResponse | null> {
    const url = `${this.API}/alpha/${code}`;
    return this.http.get<CountryResponse[]>(url)
      .pipe(
        map( countries => countries.length > 0 ? countries[0]:  null),
        catchError(() => of(null as CountryResponse | null))
      )
  }

}
