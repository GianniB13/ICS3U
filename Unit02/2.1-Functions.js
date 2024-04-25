//Who are you task
const prompt = require('prompt-sync')();
//Finding their information
let name = prompt("What is your name?")
let age = prompt("How old are you?")
let hobby = prompt("What is your favourtie hobby?")
//Printing code
myFunction()

function myFunction() {
    console.log("Hi "+ name+", you are "+age+" years old. Your favourite hobby is "+hobby+".");
  }

//Tax Calculator Task
let money = prompt("How much money did you pay?")

myFunction2()

function myFunction2() {
    let tax = money * 0.13
    let total = money + tax
    console.log("You paid "+total+" dollars,and "+tax+" dollars in tax.")

}
//Calculator Task
function calculator(operator) {
    
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));

let operator = prompt("Enter the operator (+, -, *, /):");
    if (operator == '+') {
        result = num1 + num2;
    } else if (operator == '-') {
        result = num1 - num2;
    } else if (operator == '*') {
        result = num1 * num2;
    } else if (operator == '/') {
        result = num1 / num2;
    } else {result = "Error! Invalid operator!";}
console.log("Your result is "+result+". ");
}
//Pythagoream Theorim Task
function pythagorean(legA, legB, hypotenuse) {

    let side = parseInt(prompt("Which side of the right angle triangle are you looking for? Side A? Side B? Or the Hypotenuse"));
    let legA = parseFloat(prompt("Enter the length of Side A. "));
    let legB = parseFloat(prompt("Enter the length of Side B. "));
    let hypotenuse = parseFloat(prompt("Enter the length of the Hypotenuse. "));




}