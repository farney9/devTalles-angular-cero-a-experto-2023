import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { CardListComponent } from './components/card-list/card-list.component';
import { CardListItemComponent } from './components/card-list-item/card-list-item.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchesComponent } from './components/searches/searches.component';



@NgModule({
  declarations: [
    CardListComponent,
    CardListItemComponent,
    HomePageComponent,
    SearchesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
