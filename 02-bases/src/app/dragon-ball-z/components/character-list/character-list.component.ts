import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent {

  @Input() characterlist: Character[] = [];
  @Output() deleteCharacterEvent: EventEmitter<number> = new EventEmitter();


  onDeleteItem(index: number) {
    this.deleteCharacterEvent.emit(index)
    // console.log({index});
    // this.characterlist.splice(index,1);

  }

}
