import { Component, Input, OnInit } from '@angular/core';
import { HeroModel } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() hero!: HeroModel;
  ngOnInit(): void {
    if (!this.hero) throw Error('Hero property is required');
  }


}
