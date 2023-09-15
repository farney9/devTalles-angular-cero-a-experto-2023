


export class Person {

  // name:string
  // private address?:string

  /* forma corta de definir clases en typeScript  */

  constructor(
    public name: string,
    public lastName: string,
    private address: string = 'No address',
    ) { }

}

/* Herencia desde la clase Person */

/* export class Hero extends Person {

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string
  ) {
    super(realName, 'New York');
  }
} */

/* Priorizando Composición sobre la Herencia */

export class Hero {

  // person!: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person
  ) {
    // this.person = new Person(realName);
  }
}

const tony = new Person('Ironman', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony Stark', tony);

console.log(ironman);
