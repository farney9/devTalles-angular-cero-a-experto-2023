import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  @Input() characterlist: Character[] = [];
  @Output() deleteCharacterEvent: EventEmitter<string> = new EventEmitter();


  onDeleteItem(id?: string) {
    console.log({id});

    if (!id) return;
    this.deleteCharacterEvent.emit(id)
  }

}
