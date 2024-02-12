import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroModel } from '../interfaces/hero.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url = environment.apiUrl

  constructor( private http: HttpClient) { }

  getAll(): Observable<HeroModel[]> {
    return this.http.get<HeroModel[]>(`${ this.url }/heroes`);
  }
}
