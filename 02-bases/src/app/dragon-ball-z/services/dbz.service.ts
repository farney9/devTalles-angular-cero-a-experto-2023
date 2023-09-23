import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  characters: Character[] = [{
    id: uuid(),
    name: 'krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 7500
  }
]

  constructor() { }

  addNew(newItem: Character) {
    const newCharacter: Character = { id: uuid(), ...newItem }
    this.characters.push(newCharacter)
    console.log(this.characters);
  }

  deleteById(id: string) {
    this.characters = this.characters.filter( character => character.id !== id);
  }

  update(): Character[] {
    return this.characters;
  }


}
