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
//Finding out how much money they paid
let money = parseFloat(prompt("How much money did you pay?"));

myFunction2()

function myFunction2() {
    let tax = parseFloat(money * 0.13);
    let total = parseFloat(money + tax);
    console.log("You paid "+total+" dollars total, "+tax+" dollars in tax.")

}
//Calculator Task
function calculator() {
//Asking what numbers
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    //Picking the operator
    let side = prompt("Enter the operator (+, -, *, /):");
        if (side == '+') {
            result = num1 + num2;
        } else if (side == '-') {
            result = num1 - num2;
        } else if (side == '*') {
            result = num1 * num2;
        } else if (side == '/') {
            result = num1 / num2;
        } else {result = "Error! Invalid operator!";}
        console.log("Your result is "+result+". ");
}
calculator()
//Pythagoream Theorim Task
function pythagorean(legA, legB, hypoteneuse) {
    let resultt;
     if (legA == false) {
        resultt = Math.sqrt(hypoteneuse**2 - legB**2);
    } else if (legB == false) {
       resultt = Math.sqrt(hypoteneuse**2 - legA**2);
    } else if (hypoteneuse == false) {
      resultt = Math.sqrt(legA**2 + legB**2);
    } 
    console.log("Your result is "+resultt+". ");


}
pythagorean(7, 13, false)


