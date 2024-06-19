// Tests for equality and inequality with strings
var color1 = 'blue';
var color2 = 'red';
console.log("Are colors equal? I predict False.");
console.log(color1 === color2);
console.log("Are colors not equal? I predict True.");
console.log(color1 !== color2);
// Tests using the lower case function
var inputText = 'Hello World';
console.log("Is inputText in lowercase? I predict False.");
console.log(inputText.toLowerCase() === inputText);
// Numerical tests
var number1 = 15;
var number2 = 10;
console.log("Is number1 equal to number2? I predict False.");
console.log(number1 === number2);
console.log("Is number1 greater than number2? I predict True.");
console.log(number1 > number2);
console.log("Is number1 less than or equal to number2? I predict False.");
console.log(number1 <= number2);
// Tests using "and" and "or" operators
var sunnyDay = true;
var weekend = false;
console.log("Is it a sunny day and a weekend? I predict False.");
console.log(sunnyDay && weekend);
console.log("Is it a sunny day or a weekend? I predict True.");
console.log(sunnyDay || weekend);
// Test whether an item is in an array
var animals = ['dog', 'cat', 'bird'];
console.log("Is 'bird' in the array? I predict True.");
console.log(animals.indexOf('bird') !== -1);
console.log("Is 'fish' not in the array? I predict True.");
console.log(!animals.indexOf('fish'));
