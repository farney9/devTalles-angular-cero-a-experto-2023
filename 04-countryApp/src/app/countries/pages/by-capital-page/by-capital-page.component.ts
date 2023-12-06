import { Component, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  countries: CountryResponse[] = [];


  private readonly countriesService = inject(CountriesService);


  searchByCapital(term: string) {
    this.countriesService.searchByCapital(term)
      .subscribe({
        next: (response) => {
          this.countries = response;
          // console.log(this.countries);

        },
        error: () => {
          
        }
      })

  }
}
