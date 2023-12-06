import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';

@Injectable({ providedIn: 'root' })

export class CountriesService {

  private API = environment.apiUrl



  constructor(private http: HttpClient) { }

  searchByCapital(term: string): Observable<CountryResponse[]> {
    const url = `${this.API}/capital/${term}`
    return this.http.get<CountryResponse[]>(url)
      .pipe(
        // Tap desencadena un efecto secundario
        // tap( countries => console.log('pasó por el tap', countries)),

        //Si hay error regresa un nuevo observable de un array vacío
        catchError( () => of([]))
      )
  }
  searchByCountry(term: string): Observable<CountryResponse[]> {
    const url = `${this.API}/name/${term}`
    return this.http.get<CountryResponse[]>(url)
      .pipe(
        catchError( () => of([]))
      )
  }
  searchByRegion(region: string): Observable<CountryResponse[]> {
    const url = `${this.API}/region/${region}`
    return this.http.get<CountryResponse[]>(url)
      .pipe(
        catchError( () => of([]))
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
