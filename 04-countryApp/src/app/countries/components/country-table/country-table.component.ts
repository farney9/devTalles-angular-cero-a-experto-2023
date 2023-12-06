import { Component, Input } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './country-table.component.html',
  styleUrl: './country-table.component.sass'
})
export class CountryTableComponent {

  @Input() countries: CountryResponse[] = []

  
}
