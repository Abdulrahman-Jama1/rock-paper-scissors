// - create function called getComputerChoice
function getComputerChoice() {
// - declare variable called "random" and assign to it a random number from 0-2 *
let random = Math.floor(Math.random() * 3);
// - make a conditional that prints "rock" if random is equal to zero
if (random === 0) {
   return "rock";
} else if (random === 1) {
// and prints "paper" if random equal to one
    return "paper";
} else {
// and prints "scissors" if it's anything else (which is two)
    return "scissors";
}
}



// - create function called getHumanChoice
function getHumanChoice() {
    //- declare inside it variable called "choice"
    //- assign to it a prompt to ask user for choice between (rock, paper and scissors)
    // - make humanChoice parameter case-insensitive so that the player can input "rock", "Rock" etc and it will still work. 
    let choice = prompt("what do you choose, will it be rock or paper? maybe scissors?").toLowerCase();

    // - print the user input in the console
    return choice;
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("you win! bravo")
    }
}


playRound(getHumanChoice(), getComputerChoice());








// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.








