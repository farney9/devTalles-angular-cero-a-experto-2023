import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interface';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit{

  countriesForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required],
  })

  countriesByRegion: SmallCountry[] = [];
  borders: string[] = [];

  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
  ) {}
  ngOnInit() {
    this.onRegionChange();
    this.onCountryChange();
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChange() {
    this.countriesForm.get('region')?.valueChanges
    .pipe(
      tap( () => this.countriesForm.get('country')!.setValue('')),
      tap(  () => this.borders = []),
      switchMap( (region) => this.countriesService.getCountriesByRegion(region)),
    )
    .subscribe( (countries) => {
      this.countriesByRegion = countries;
    })
  }
  onCountryChange() {
    this.countriesForm.get('country')?.valueChanges
    .pipe(
      tap( () => this.countriesForm.get('border')!.setValue('')),
      filter( (value: string) => value.length > 0 ),
      switchMap( (alphaCode) => this.countriesService.getCountryByAlphaCode(alphaCode)),
    )
    .subscribe( (country) => {
      this.borders = country.borders;
      console.log({borders: country.borders});

      // this.countriesByRegion = countries;
    })
  }

}
