function getComputerChoice() {
let random = Math.floor(Math.random() * 3);

if (random === 0) {
   console.log("Rock");
} else if (random === 1) {
    console.log("Paper");
} else {
    console.log("Scissors");
}
}

getComputerChoice();