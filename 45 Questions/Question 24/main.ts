// Tests for equality and inequality with strings
let color1: string = 'blue';
let color2: string = 'red';

console.log("Are colors equal? I predict False.");
console.log(color1 === color2);

console.log("Are colors not equal? I predict True.");
console.log(color1 !== color2);

// Tests using the lower case function
let inputText: string = 'Hello World';

console.log("Is inputText in lowercase? I predict False.");
console.log(inputText.toLowerCase() === inputText);

// Numerical tests
let number1: number = 15;
let number2: number = 10;

console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);

console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);

console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);

// Tests using "and" and "or" operators
let sunnyDay: boolean = true;
let weekend: boolean = false;

console.log("Is it a sunny day and a weekend? I predict False.");
console.log(sunnyDay && weekend);

console.log("Is it a sunny day or a weekend? I predict True.");
console.log(sunnyDay || weekend);

// Test whether an item is in an array
let animals: string[] = ['dog', 'cat', 'bird'];

console.log("Is 'bird' in the array? I predict True.");
console.log(animals.indexOf('bird') !== -1);

console.log("Is 'fish' not in the array? I predict True.");
console.log(!animals.indexOf('fish'));