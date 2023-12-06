import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input() placeholder: string = ''
  @Output() onSearchEvent = new EventEmitter<string>();
  @ViewChild('txtSearchInput')
  searchInput!: ElementRef<HTMLInputElement>;

  onSearch(term: string) {
    this.onSearchEvent.emit(term);
    this.searchInput.nativeElement.value = ''
  }


}
