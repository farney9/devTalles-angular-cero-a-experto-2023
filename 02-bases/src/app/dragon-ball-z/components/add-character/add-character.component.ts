import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output() newCharacterEvent: EventEmitter<Character> = new EventEmitter();

  character: Character = {name: '', power: 0};

  emitCharacter() {

    if (this.character.name.length === 0) return;

    this.newCharacterEvent.emit(this.character);

    // console.log(this.newCharacterEvent);

    this.character = { name: '', power: 0};


  }
}
