import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { CountryResponse } from '../../interfaces/country.interface';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  country?: CountryResponse;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        // recibe el antiguo valor y regresa un nuevo Observable
        // {id} es la desestructuración de params
        switchMap(({id} )=> this.countriesService.searchByAlphaCode(id))
      )
      .subscribe({
        next: (country) => {
          if(!country) return this.router.navigateByUrl('');

          return this.country = country;
        }
      })
  }
}
