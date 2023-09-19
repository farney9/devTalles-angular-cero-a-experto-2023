import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

  heroesNames: string[] = ['Spiderman', 'Ironman', 'Hulk','She Hulk', 'Thor'];
  deletedHero? = '' ;



  removeLastHero() {
    this.deletedHero = this.heroesNames.pop();
    console.log({deletedHero: this.deletedHero});

  }
  resetHeroes() {
    this.heroesNames = ['Spiderman', 'Ironman', 'Hulk','She Hulk', 'Thor'];
    this.deletedHero = '';
  }

}
