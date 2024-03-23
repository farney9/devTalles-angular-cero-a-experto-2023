import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private renderer: Renderer2;
  private theme: string;

  constructor( @Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.theme = localStorage.getItem('theme') || 'light'; // Tema por defecto
    this.applyTheme(this.theme);
  }

  private applyTheme(theme: string): void {
    const classToAdd = theme === 'dark' ? 'bg-dark' : 'bg-light';
    const classToRemove = theme === 'dark' ? 'bg-light' : 'bg-dark';
    this.renderer.removeClass(this.document.body, classToRemove);
    this.renderer.addClass(this.document.body, classToAdd);
  }

  setTheme(theme: string): void {
    this.theme = theme;
    localStorage.setItem('theme', theme);
    this.applyTheme(theme);
  }
}
