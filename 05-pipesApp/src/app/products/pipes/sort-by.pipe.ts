import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {

  private directionChangeCount = 0;

  transform(heroes: Hero[], sortBy?: keyof Hero | '', orderDirection: 'asc' | 'desc' = 'asc'): Hero[] {

    console.log({heroes, sortBy, orderDirection});

     // Incrementar el contador cada vez que cambia la dirección
     this.directionChangeCount++;

    const sortedHeroes = [...heroes]; // Crear una copia para evitar modificar el array original

    const sortOrder = (orderDirection === 'asc') ? 1 : -1;

    switch(sortBy) {
      case 'name':
        return sortedHeroes.sort( (a, b) => (a.name > b.name) ? sortOrder : -sortOrder );
      case 'canFly':
        return sortedHeroes.sort( (a, b) => (a.canFly > b.canFly) ? sortOrder : -sortOrder  );
      case 'color':
        return sortedHeroes.sort( (a, b) => (a.color > b.color) ? sortOrder : -sortOrder  );

        default:
          // Forzar una actualización de la tubería cuando solo cambia la dirección
          return sortedHeroes.slice().sort((a, b) => a.name.localeCompare(b.name) * sortOrder);
    }
  }

}
