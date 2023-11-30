import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchesComponent } from './components/searches/searches.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardListItemComponent } from './components/card-list-item/card-list-item.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchesComponent,
    CardListComponent,
    CardListItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomePageComponent,
  ]
})
export class GifsModule { }
