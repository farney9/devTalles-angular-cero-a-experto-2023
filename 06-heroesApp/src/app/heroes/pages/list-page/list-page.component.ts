import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { HeroModel } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  heroes: HeroModel[] = [];

  constructor(private readonly heroesService: HeroesService) { }
  ngOnInit() {
    this.heroesService.getAll()
      .subscribe( resp => this.heroes = resp);
  }

}
