import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';



@NgModule({
  declarations: [
    HeroDetailsComponent,
    HeroesListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroDetailsComponent,
    HeroesListComponent
  ]
})
export class HeroesModule { }
