

/*
Los decoradores son funciones especiales que se ADJUNTAN a determinados objetos

Documentabción oficial --> https://www.typescriptlang.org/docs/handbook/decorators.html

los decoradores no es más que un sa simple función

Se pueden poner a nivel de: clasess, propiedades, métodos
 */

function ClassDecorator<T extends {new (...args:any[]): {} }>( constructor: T) {
  return class extends constructor {
    newProperty = 'newProperty';
    hello = 'override'
  }
}

@ClassDecorator
export class SuperClass {

  // @ClassDecorator()
  myProiperty = 'Abc123';

  // @ClassDecorator()
  print(){
    console.log('Hola mundo');
  }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);

