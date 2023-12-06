import { Component, inject } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  countries: CountryResponse[] = [];

  private readonly countriesService = inject(CountriesService);

  searchByRegion(term: string) {
    this.countriesService.searchByRegion(term)
      .subscribe({
        next: (response) => {
          this.countries = response;
        }
      })
  }

}
