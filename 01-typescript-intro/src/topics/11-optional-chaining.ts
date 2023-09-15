/* Encadenamiento Opcional:


*/


export interface Passenger {
  name: string,
  childrenName?: string[]
}

const passenger1: Passenger = {
  name: 'Farney'
}

const passenger2: Passenger = {
  name: 'Melissa',
  childrenName: ['Natalia', 'Elizabeth']
}

const returnChildrenNumber = (passenger: Passenger): number => {


  const childrenCount = passenger.childrenName?.length || 0;
  // const childrenCount = passenger.childrenName!.length;

  console.log( `${passenger.name}: Tiene ${childrenCount} hijos`);

  return childrenCount;

}

returnChildrenNumber(passenger1)

