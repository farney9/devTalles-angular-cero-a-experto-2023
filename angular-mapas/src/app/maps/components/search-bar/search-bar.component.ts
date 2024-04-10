import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { PlacesService } from '@services/places.service';
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
  private placesService = inject(PlacesService);

  onSearchPlace(event: KeyboardEvent, query: string = ''.trim(), ) {
    if (this.debounceTimer) clearTimeout(this.debounceTimer);

    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',].includes(event.key) || !query) {
      return;
    }

    this.debounceTimer = setTimeout(() => {
      this.placesService.findPlacesByQuery(query);
      // console.log('Searching for:', query);

    }, 500);
  }

}
