import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: 'app-defer-options-page',
  standalone: true,
  imports: [CommonModule, TitleComponent, HeavyLoadersFastComponent],
  templateUrl: './defer-options-page.component.html',
  styles: ``
})
export default class DeferOptionsPageComponent {

}
