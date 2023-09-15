
function addNumbers(a: number, b: number) {
  return a + b;
}

const addNumbersArrow = (a: number, b: number):string => {
  return `${a + b}`
}

const result = addNumbers(1, 2)
const resultArrow = addNumbersArrow(3, 4)
console.log({result});
console.log({resultArrow});


export{}