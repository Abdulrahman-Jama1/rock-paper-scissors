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


