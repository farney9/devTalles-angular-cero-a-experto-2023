import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list-item',
  templateUrl: './card-list-item.component.html',
  styleUrls: ['./card-list-item.component.sass']
})
export class CardListItemComponent implements OnInit {
  @Input() gif!: Gif;
  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif property is required');
  }




}
