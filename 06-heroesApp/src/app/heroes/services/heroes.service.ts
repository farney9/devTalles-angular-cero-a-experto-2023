import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { HeroModel } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = environment.apiUrl

  constructor( private http: HttpClient) { }

  getAll(): Observable<HeroModel[]> {
    return this.http.get<HeroModel[]>(`${ this.url }/heroes`);
  }

  getHeroById(id: string): Observable<HeroModel|undefined> {
    return this.http.get<HeroModel>(`${ this.url }/heroes/${id}`)
      .pipe(
        // si viene un error necesito regresar siempre un Observable
        catchError(error => of(undefined))
      );
  }

  getSuggestion(query: string ): Observable<HeroModel[]> {
    return this.http.get<HeroModel[]>(`${ this.url}/heroes?q=${query}&_limit=6`)
  }

  add(hero: HeroModel): Observable<HeroModel> {
    return this.http.post<HeroModel>(`${ this.url }/heroes`, hero);
  }

  update(hero: HeroModel): Observable<HeroModel> {
    if (!hero.id) throw Error('Hero id is required');
    return this.http.patch<HeroModel>(`${ this.url }/heroes/${hero.id}`, hero);
  }

  deleteById(id: string): Observable<boolean> {
    return this.http.delete(`${ this.url }/heroes/${id}`)
      .pipe(
        map( resp => true),
        catchError( error => of(false)),
      )
  }


}
