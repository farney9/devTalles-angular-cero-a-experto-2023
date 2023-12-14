import { Component, inject } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa'| 'Americas'| 'Asia'| 'Europe'| 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent {

  countries: CountryResponse[] = [];
  regions:Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;

  private readonly countriesService = inject(CountriesService);

  searchByRegion(region: Region) {
    this.selectedRegion = region;
    this.countriesService.searchByRegion(region)
      .subscribe({
        next: (response) => {
          this.countries = response;
        }
      })
  }

}
