
/* Función que sea capaz de procesar la información que se reciba dependiento el tipado del argumento */



export function whatsMytype<T>(params:T): T {

  return params;
}

const iAmString = whatsMytype<string>('Hola Mundo')
const iAmNumber = whatsMytype<number>(100)
const iAmNumberArray = whatsMytype<number[]>([0,1,2,3,4,5])

console.log(iAmString.split(' '));
console.log(iAmNumber.toFixed());
console.log(iAmNumberArray.join('-'));
