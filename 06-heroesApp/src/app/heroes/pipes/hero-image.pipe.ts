import { Pipe, PipeTransform } from '@angular/core';
import { HeroModel } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroImage'
})
export class HeroImagePipe implements PipeTransform {

  transform(hero: HeroModel): string {
    if(!hero.id && !hero.alt_img) {
      return 'assets/no-image.png'
    }

    if (hero.alt_img) return hero.alt_img; // el img_alt es un url completo ejemplo:  https://google.com/flash.jpg

    return `assets/heroes/${hero.id}.jpg`;
  }

}
