import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, switchMap, tap } from 'rxjs';


import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';


import { HeroesService } from '../../services/heroes.service';
import { HeroModel, Publisher } from '../../interfaces/hero.interface';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: ``
})
export class NewPageComponent implements OnInit{

  constructor(
      private readonly heroesService: HeroesService,
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private snackBar: MatSnackBar,
      private dialog: MatDialog
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
          this.showSnackbar(`${heroUpdated.superhero} updated!`);
        })
        return;
    }

    this.heroesService.add(this.currentHero)
      .subscribe(newHero => {
        this.showSnackbar(`${newHero.superhero} added!`);
        this.router.navigateByUrl(`/heroes/edit/${newHero.id}`);

      })
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'done', {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    })
  }

  onConfirmDeleteHero(enterAnimationDuration: string, exitAnimationDuration: string): void {
    if (!this.currentHero.id) throw Error('Hero id is required');

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: this.heroForm.value
    });

    dialogRef.afterClosed()
      .pipe(
        filter((result: boolean) => result),
        switchMap( () => this.heroesService.deleteById(this.currentHero.id)),
        filter((wasDeleted: boolean) => wasDeleted),
      )
    .subscribe( () => {
      this.router.navigate(['heroes'])
    })
  }
}
