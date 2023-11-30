import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-searches',
  template: `
  <div class="input-group">
    <input
      (keyup.enter)="searchTag()"
      type="text"
      class="form-control"
      placeholder="Search..."
      #txtTagInput
    >
    <div class="input-group-text">
      <button
        (click)="searchTag()"
        class="btn btn-secondary"
        type="button">
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
  `,
  styleUrls: ['./searches.component.sass']
})
export class SearchesComponent {

  @ViewChild('txtTagInput')
  tagInput!: ElementRef<HTMLInputElement>;


  constructor( private gifsService: GifsService) {


  }

  searchTag() {
    const newtag = this.tagInput.nativeElement.value;

    this.gifsService.search(newtag);
    this.tagInput.nativeElement.value = '';
    // console.log({newtag});

  }

}
