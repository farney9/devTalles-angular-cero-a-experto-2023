import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/country.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: ``
})
export class SelectorPageComponent implements OnInit{

  countriesForm: FormGroup = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    borders: ['', Validators.required],
  })


  constructor(
    private fb: FormBuilder,
    private countriesService: CountriesService,
  ) {}
  ngOnInit() {
    this.onRegionChange()
  }

  get regions(): Region[] {
    return this.countriesService.regions;
  }

  onRegionChange() {
    this.countriesForm.get('region')?.valueChanges
    .pipe(
      switchMap( region => this.countriesService.getCountriesByRegion(region)),
    )
    .subscribe( (countries) => {
      console.log({countries});

    })
  }

}
