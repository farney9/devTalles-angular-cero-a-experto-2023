import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrl: './theme-selector.component.sass'
})
export class ThemeSelectorComponent {

  constructor(private themeService: ThemeService) {}

  setTheme(theme: string): void {
    this.themeService.setTheme(theme);
  }

}
