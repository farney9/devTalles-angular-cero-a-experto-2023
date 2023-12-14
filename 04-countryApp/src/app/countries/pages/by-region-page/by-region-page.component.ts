import { Component, OnInit, inject } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent implements OnInit{


  countries: CountryResponse[] = [];
  regions:Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion?: Region;

  private readonly countriesService = inject(CountriesService);

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }
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
