
function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number):string => {
  return `${a + b}`
}

/* const result = addNumbers(1, 2)
const resultArrow = addNumbersArrow(3, 4)
console.log({result});
console.log({resultArrow}); */

interface Character {
  name: string;
  hp: number;
  showHp: () => void;
}

const healCharacter = (character: Character, amount: number) => {

  character.hp += amount
}

const strider: Character = {
  name: 'Strider',
  hp: 100,
  showHp() {
    console.log(`Puntos de vida ${this.hp}`);

  },
}


strider.showHp();

export{}