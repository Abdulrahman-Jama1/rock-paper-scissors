// - create function called getComputerChoice
function getComputerChoice() {
// - declare variable called "random" and assign to it a random number from 0-2 *
let random = Math.floor(Math.random() * 3);

// - make a conditional that prints "rock" if random is equal to zero
if (random === 0) {
   console.log("Rock");
} else if (random === 1) {
// and prints "paper" if random equal to one
    console.log("Paper");
} else {
// and prints "scissors" if it's anything else (which is two)
    console.log("Scissors");
}
}



// - create function called getHumanChoice
function getHumanChoice() {
    //- declare inside it variable called "choice"
    //- assign to it a prompt to ask user for choice between (rock, paper and scissors)
    // - make humanChoice parameter case-insensitive so that the player can input "rock", "Rock" etc and it will still work. 
    let choice = prompt("what do you choose, will it be rock or paper? maybe scissors?").toLowerCase();

    // - print the user input in the console
    console.log(choice);
}








