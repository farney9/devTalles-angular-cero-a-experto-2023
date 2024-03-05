import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Region } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private API = environment.apiUrl;
  private _regions: Region[] = [Region.Africa, Region.Americas, Region.Asia, Region.Europe, Region.Oceania]


  constructor() { }

  get regions(): Region[] {
    return [...this._regions];
  }
}
