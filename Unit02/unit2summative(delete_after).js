/**
 * ICS3UC - Mr. Bernabo 
 *  
 * Unit 2 (Functions) Summative Task
 * 
 * Author: Gianni Bernabo
 */

'use strict';
module.exports = { discriminant, military_to_standard }
const prompt = require("prompt-sync")();

function discriminant(a, b, c) {
  if (b**2 - 4*a*c < 0){
    return 0;
  }
  else if (b**2 - 4*a*c == 0){
    return 1;
  }
  else if (b**2 - 4*a*c > 0){
    return 2;
  }
}
console.log(discriminant(10, 20, 30));

// Convert military time to standard time
function military_to_standard(hour, minute) {
    if (hour <= 11 && minute <= 59){
        return ("It is in standard time. " + hour + ":" + minute + " AM\n");
      }
    else if (hour > 12 && hour < 24 && minute <= 59){
        let hour2 = parseInt(hour) - 12;
        return ("The time in standard time is " + hour2 + ":" + minute + " PM\n");
       
    }
} 
console.log(military_to_standard(11, 45));
console.log(military_to_standard(13, 50));

// Start a game of Evens vs. Odds

let difficulty = prompt("Would you like the difficulty to be easy, medium, or hard?");
    if (difficulty == easy) {
        console.log("You chose the easy difficulty.");
    }
    else if (difficulty == medium) {
        console.log("You chose the medium difficulty.");
    }
    else (difficulty == hard); {
        console.log("You chose the hard difficulty.");
    }
    





let humanScore = 0;
let computerScore = 0;

function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function game() {
    let computerNumber = randInt(1, 20);
    let userNumber = parseInt(prompt("Pick a number between 1 and 20:"));
    
    if (userNumber < 1 || userNumber > 20) {
        computerScore = computerScore + 1;
    } else {
        if (userNumber == computerNumber || userNumber % 2 == computerNumber % 2) {
            humanScore = humanScore + 1;
        } else {
            computerScore = computerScore + 1;
        }
    }
    
    if (humanScore < 3 && computerScore < 3) {
        game();
    } else {
        console.log(humanScore == 3 && "You win!" || "The Computer wins!");
    }
}

function evens_vs_odds() {
    console.log("Welcome to the game of evens vs odds!");
    console.log("Rules: You and the computer pick a number from 1 to 20.");
    console.log("If numbers are the same or both even/odd, you get 1 point.");
    console.log("If one is even and the other odd, computer gets 1 point.");
    console.log("Let's begin");
    game();
}

evens_vs_odds();
