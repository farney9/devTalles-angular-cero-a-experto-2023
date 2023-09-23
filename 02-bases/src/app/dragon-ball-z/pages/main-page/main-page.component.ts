import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  characters: Character[] = [{
    name: 'krillin',
    power: 1000
  },
  {
    name: 'Goku',
    power: 9500
  },
  {
    name: 'Vegeta',
    power: 7500
  }
]

onNewCharacterHandler(newItem: Character) {
  this.characters.push(newItem)
  // this.characters.push({...newItem})
  // console.log(newItem);
  console.log(this.characters);

}

onDeleteCharacterHandler(id: number) {
  console.log({id});

  this.characters.splice(id, 1);

}

}
