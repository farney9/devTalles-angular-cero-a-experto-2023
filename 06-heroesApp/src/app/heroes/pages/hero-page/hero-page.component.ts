import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { HeroModel } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styles: ``
})
export class HeroPageComponent implements OnInit{

  hero?: HeroModel;

  constructor(
    private readonly heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {

  }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        delay(1500),
        switchMap( ({id}) => this.heroesService.getHeroById(id)),
      ).subscribe( hero => {
        if( !hero ) return this.router.navigate(['/heroes/list']);
        // this.hero es el hero por defauklt el cual puede ser nulo o undefined
        this.hero = hero;
        console.log({hero});

        return;
      })
  }

  goBack() {
    this.router.navigateByUrl('/heroes/list');
  }

}
