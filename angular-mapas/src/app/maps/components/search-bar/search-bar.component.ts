import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { SearchResultsComponent } from 'src/app/maps/components/search-results/search-results.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, SearchResultsComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.sass'
})
export class SearchBarComponent {

  private debounceTimer?: NodeJS.Timeout;

  onSearchPlace(event: KeyboardEvent, query: string = ''.trim(), ) {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',].includes(event.key) || !query) {
      return;
    }

    this.debounceTimer = setTimeout(() => {
      console.log('Searching for:', query);

    }, 500);
  }

}
