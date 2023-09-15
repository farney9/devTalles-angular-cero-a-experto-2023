import { Product, taxCalculation } from "./06-functions-destructuring"



const shoppingCart: Product[] = [

  { description: 'Nokia', price: 100},
  { description: 'iPad', price: 150},
];

// tax = 0.15%

const [total, totalTax] = taxCalculation({
  tax: 0.15,
  products: shoppingCart
});

console.log('Total:', total );
console.log('Tax:', totalTax );




export {}