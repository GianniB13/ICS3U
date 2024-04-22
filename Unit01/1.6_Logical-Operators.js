// 1.6 Logical Operators
const prompt = require('prompt-sync')();
//Asking if user wants to play a game
let choice = prompt("Do you want to play a game? [y]/n: ") || 'y';

if (choice !== "n" && choice !== "y") {
    console.log("Error!\nInput either y or n to play.");
} 
else if (choice === "n") {
    console.log("Damn, alright.");
} 
//Enter a number
else {
    let firstNumber = parseInt(prompt("Enter a whole number: "));
    if (firstNumber > 10 && firstNumber < 50) {
        console.log("The next number you input should be greater than 50");
    }
//Enter a second number
    let secondNumber = parseInt(prompt("Enter a second whole number: "), 10);
    if (secondNumber % 2 == 0) {
        console.log("The next number you will input should be an odd number");
    } 
    else {
        console.log("The next number you will input should be an even number");
    }
//Enter a third number
    let thirdNumber = parseInt(prompt("Input a third whole number: "), 10);
//Is it considered Squirrelly
    console.log("\nA set of three numbers is considered Squirrelly if their sum+1 is divisible by 10");
    if ((firstNumber + secondNumber + thirdNumber + 1) % 10 == 0) {
        console.log("The sum of your numbers is considered Squirrelly.");
    } 
    else {
        console.log("The sum of your numbers is not considered Squirrelly.");
    }
//Is it considered Jazzy
    console.log("\nA set of three numbers is considered Jazzy if at least two of the numbers are divisible by 3.");
    let jazzyCount = 0;
    if (firstNumber % 3 == 0) jazzyCount++;
    if (secondNumber % 3 == 0) jazzyCount++;
    if (thirdNumber % 3 == 0) jazzyCount++;

    if (jazzyCount >= 2) {
        console.log("Your numbers are Jazzy.");
    } 
    else {
        console.log("Your numbers are not Jazzy.");
    }
}