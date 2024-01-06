import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroPageComponent } from './pages/hero-page/hero-page.component';
import { LayoutHeroPageComponent } from './pages/layout-hero-page/layout-hero-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';


@NgModule({
  declarations: [
    HeroPageComponent,
    LayoutHeroPageComponent,
    ListPageComponent,
    SearchPageComponent,
    NewPageComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
