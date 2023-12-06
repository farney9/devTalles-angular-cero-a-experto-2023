import { Component, inject } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countries: CountryResponse[] = [];

  private readonly countriesService = inject(CountriesService);

  searchByCountry(term: string) {
    this.countriesService.searchByCountry(term)
      .subscribe({
        next: (response) => {
          this.countries = response;
        }
      })
  }
}
