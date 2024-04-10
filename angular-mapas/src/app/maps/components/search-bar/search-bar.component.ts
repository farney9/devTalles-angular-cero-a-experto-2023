import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchResultsComponent } from 'src/app/maps/components/search-results/search-results.component';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule, SearchResultsComponent],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.sass'
})
export class SearchBarComponent {

  search( query: string) {
    console.log('searching for:', query);
  }

}
