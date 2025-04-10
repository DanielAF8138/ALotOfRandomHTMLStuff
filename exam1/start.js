const people = [
  { name: 'John', year: 1988 },
  { name: 'Chris', year: 1986 },
  { name: 'David', year: 1970 },
  { name: 'Dee', year: 2015 }
];

// Some and Every Checks
const atleast21 = (element) => 2023 - element.year >= 21;
let atLeastOne21 = people.some(atleast21);
// Array.prototype.some() // is at least one person 21 or older?
// assign the result to atLeastOne21
console.log(atLeastOne21);

let allOfEmTho = people.every(atleast21);
// Array.prototype.every() // is everyone 21 or older?
// assign the result to allOfEmTho
console.log(allOfEmTho);