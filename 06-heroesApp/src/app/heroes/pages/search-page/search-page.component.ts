import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroModel } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  heroes: HeroModel[] = [];
  searchInput = new FormControl('');
  selectedHero?:HeroModel;

  constructor(private heroesService: HeroesService) {}
  searchHero() {
    const value:string = this.searchInput.value || '';

    this.heroesService.getSuggestion(value)
      .subscribe( response => this.heroes = response);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const hero: HeroModel = event.option.value;
    this.searchInput.setValue(hero.superhero);
    this.selectedHero = hero;
  }

}
