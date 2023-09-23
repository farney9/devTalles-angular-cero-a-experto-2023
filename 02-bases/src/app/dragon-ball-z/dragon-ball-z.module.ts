import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { MainPageComponent } from './pages/main-page/main-page.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CharacterListComponent,
    AddCharacterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [MainPageComponent]
})
export class DragonBallZModule { }
