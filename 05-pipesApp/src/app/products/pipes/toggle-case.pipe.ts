import { Pipe, PipeTransform } from '@angular/core';


// farney | toggleCase = 'FARNEY'
// FARNEY | toggleCase = 'farney'

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {

  transform(value: string, toUpper: boolean = false): string {
    return (toUpper)
      ? value.toUpperCase()
      : value.toLowerCase();
  }

}
