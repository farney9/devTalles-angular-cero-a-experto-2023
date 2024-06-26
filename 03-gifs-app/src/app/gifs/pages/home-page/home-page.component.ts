import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent {

  constructor(private gifsService: GifsService) {

  }

  get gifs() {
    return this.gifsService.gifList;
  }


  onClick(tag: string) {

  }

}
