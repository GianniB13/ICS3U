const prompt = require('prompt-sync')();

// Print 1.4 
console.log("1.4 - User Input");

// What year were you born?
let yearBorn = prompt("What year were you born? ");
console.log(`You entered ${yearBorn}`);

// calculate age
let currentYear = 2024;
let age = currentYear - yearBorn;
console.log(`You are likely ${age} years old`);

// What is your name?
let name = prompt("What is your name? ");
console.log(`Hi, ${name}. You were born in ${yearBorn} and you are likely ${age} years old.`);

// print the length of their name
console.log(`Your name is ${name.length} letters long.`);

// ask for a temperature in Fahrenheit and convert it to Celsius
let tempFahrenheit = prompt("Enter a temperature in Fahrenheit: ");
let tempCelsius = (tempFahrenheit - 32) * 5/9;
console.log(`${tempFahrenheit}F is equal to ${tempCelsius.toFixed(2)}C.`);

// what else it can be used for
console.log("The prompt function can be used for many different tasks such as generating texts based on inputs, answering questions, and even simulating conversations. ");