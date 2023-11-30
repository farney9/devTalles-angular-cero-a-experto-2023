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

  private organizeTagsHistory( newTag: string) {

    newTag = newTag.toLowerCase();

    if (this._tagsHistory.includes(newTag)) {
      this._tagsHistory = this._tagsHistory.filter( (tag) => tag !== newTag);
    }

    // unshift agrega un nuevo elemento a la inicio del arreglo
    this._tagsHistory.unshift(newTag);

    this._tagsHistory = this._tagsHistory.splice(0,10)

  }
  search(tag: string){

    if (tag.length === 0) return;
    this.organizeTagsHistory(tag)


    // console.log(this.tagHistory);

  }


}
