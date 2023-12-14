import { Component, OnInit, inject } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit{


  countries: CountryResponse[] = [];
  isloading = false;

  private readonly countriesService = inject(CountriesService);
  initialValue = ''
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term
  }
  searchByCapital(term: string) {

    this.isloading = true;

    this.countriesService.searchByCapital(term)
      .subscribe({
        next: (response) => {
          this.countries = response;
          this.isloading = false;
          // console.log(this.countries);
        },
        error: () => {
          this.isloading = false;

        }
      })

  }
}
