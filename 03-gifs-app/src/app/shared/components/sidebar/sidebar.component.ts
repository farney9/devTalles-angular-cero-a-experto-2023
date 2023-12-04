import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {


  constructor( private gifsService: GifsService) {

  }

  get tags(): string[] {
    return this.gifsService.tagHistory;
  }

  searchTag(tagName: string) {
    this.gifsService.search(tagName);
  }
}
