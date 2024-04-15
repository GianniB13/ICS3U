const prompt = require('prompt-sync')();

// User age
let age = parseInt(prompt("How old are you? "));

// 50 years old or older?
if (age >= 50) {
    console.log("You qualify for the senior discount!");
} 
else if (age < 16) {5
    // Younger than 16?
    console.log("You're not old enough to drive yet.");
}

// Age is even or odd
if (age % 2 === 0) {
    console.log("Your age is an even number!");
} 
else {
    console.log("Your age is an odd number!");
}

// Name?
let userName = prompt("What is your name? ");

// Conditional checks on the userName
if (userName === "Mr. J") {
    console.log("🐠"); // secret language for Mr. J
} 
else if (userName.length > 7) {
    console.log("You have a long name.");
}

// How long is name 
let nameLength = parseInt(prompt("How long is your name? "));

// Checks on entered name length
if (nameLength === userName.length) {
    console.log("That's correct! ✔️");
} 
else if (nameLength > userName.length) {
    console.log("Too high ✖️");
} 
else {
    console.log("Too low ✖️");
}


