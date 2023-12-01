import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

const GIFPHY_API_KEY = '1rJql31gSmcFCljdH3aR3LRcXrJRG96y';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  gifList: Gif[] = [];
  private _tagsHistory: string[] = [];
  private serviceUrl = 'https://api.giphy.com/v1/gifs';

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagHistory() {
    // operador spread para crear una copia de los tagsHistory
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(newTag: string) {

    newTag = newTag.toLowerCase();

    if (this._tagsHistory.includes(newTag)) {
      this._tagsHistory = this._tagsHistory.filter((tag) => tag !== newTag);
    }

    // unshift agrega un nuevo elemento a la inicio del arreglo
    this._tagsHistory.unshift(newTag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }
  private loadLocalStorage() {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!) ;
    if (this._tagsHistory.length === 0) return;
    this.search(this._tagsHistory[0]);
  }

  search(tag: string) {
    if (tag.length === 0) return;
    this.organizeTagsHistory(tag)
    const params = new HttpParams()
      .set('api_key', GIFPHY_API_KEY)
      .set('limit', '10')
      .set('q', tag)

    const url = `${this.serviceUrl}/search`

    this.http.get<SearchResponse>(url, { params })
      .subscribe(resp => {
        this.gifList = resp.data;
      })
  }
}
