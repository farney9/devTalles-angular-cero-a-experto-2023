import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent implements OnInit, OnDestroy {

  @Input() placeholder: string = ''
  @Output() onSearchEvent = new EventEmitter<string>();
  @Output() onDebounceEvent = new EventEmitter<string>();
  @ViewChild('txtSearchInput') searchInput!: ElementRef<HTMLInputElement>;

  private debouncer = new Subject<string>()
  private debouncerSubscription?: Subscription;

  ngOnInit() {
    this.debouncerSubscription = this.debouncer
      .pipe(
        debounceTime(500)
      )
      .subscribe({
        next: (value) => {
          // console.log('Debouncer value', value);
          this.onDebounceEvent.emit(value);
          this.searchInput.nativeElement.value = ''
        }
      })
  }

  ngOnDestroy() {
    this.debouncerSubscription?.unsubscribe()
  }

  onSearch(term: string) {
    this.onSearchEvent.emit(term);
    this.searchInput.nativeElement.value = ''
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }




}
