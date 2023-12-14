import { Component, OnInit, inject } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit{

  private readonly countriesService = inject(CountriesService);

  countries: CountryResponse[] = [];
  initialValue = ''

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }
  searchByCountry(term: string) {
    this.countriesService.searchByCountry(term)
      .subscribe({
        next: (response) => {
          this.countries = response;
        }
      })
  }
}
