import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  constructor() { }

  get tagHistory() {
    // operador spread para crear una copia de los tagsHistory
    return [...this._tagsHistory];
  }

  search(tag: string){
    // unshift agrega un nuevo elemento a la inicio del arreglo
    this._tagsHistory.unshift(tag);
    console.log(this.tagHistory);

  }


}
