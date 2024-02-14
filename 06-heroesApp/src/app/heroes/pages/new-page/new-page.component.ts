import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


import { HeroesService } from '../../services/heroes.service';
import { HeroModel, Publisher } from '../../interfaces/hero.interface';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit{

  constructor(
      private readonly heroesService: HeroesService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) {}
  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroesService.getHeroById(id)),
      ).subscribe( hero => {
        if (!hero) return this.router.navigateByUrl('/');

        this.heroForm.reset(hero);
        return;
      })
  }

  heroForm = new FormGroup({
    id:        new FormControl<string>(''),
    superhero: new FormControl<string>('', { nonNullable: true}),
    publisher: new FormControl<Publisher>(Publisher.DCCOMICS || Publisher.MARVELCOMICS),
    alter_ego: new FormControl(''),
    first_appearance: new FormControl(''),
    characters:new FormControl(''),
    alt_img:   new FormControl(''),
  });

  publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ]

  get currentHero(): HeroModel {
    const hero = this.heroForm.value as HeroModel;
    return hero;

  }

  onSubmit() {

    if (this.heroForm.invalid) return;
    if (this.currentHero.id) {
      this.heroesService.update(this.currentHero)
        .subscribe(heroUpdated => {
          // TODO: Mostar snackbar
        })
        return;
    }

    this.heroesService.add(this.currentHero)
      .subscribe(newHero => {
        // TODO: Mostrar snackbar y navegar a /heroes/edit/hero.id
      })

  }

}
