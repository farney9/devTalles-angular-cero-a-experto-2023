import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private readonly dbzService: DbzService) {}

  ngOnInit(): void {
   this.updateCharacters();
  }

  updateCharacters(): Character[] {
    return this.dbzService.update();
  }

  deleteCharacterById(id: string) {
    this.dbzService.deleteById(id)
  }

  addNewCharacter(character: Character) {
    this.dbzService.addNew(character);
  }

}
