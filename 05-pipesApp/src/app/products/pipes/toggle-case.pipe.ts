import { Pipe, PipeTransform } from '@angular/core';


// farney | toggleCase = 'FARNEY'
// FARNEY | toggleCase = 'farney'

@Pipe({
  name: 'toggleCase',
  standalone: true
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string): string {
    return '';
  }

}
