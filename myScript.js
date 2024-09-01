function getComputerChoice() {
let random = Math.floor(Math.random() * 3);

if (random === 0) {
   return "rock";
} else if (random === 1) {
    return "paper";
} else {
    return "scissors";
}
}


function getHumanChoice() {
let choice = prompt("what do you choose, will it be rock or paper? maybe scissors?").toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper")
     {  console.log(humanChoice, computerChoice)
        console.log("you win! bravo")
        humanScore++;
    } else if (humanChoice === computerChoice) {
        console.log(humanChoice, computerChoice)
        console.log("it's a tie!")
    } else {
        console.log(humanChoice, computerChoice)
        console.log("who lost? you of course hahahha");
        computerScore++;
    }

};

const btnContainer = document.querySelector('#container');

btnContainer.addEventListener('click', (event) => {
    let target = event.target;

          switch(target.id) {
             case '1':
                  playRound('rock', getComputerChoice());
                  pushScore();
                  break;
             case '2':
                  playRound('paper', getComputerChoice());
                  pushScore();
                  break;
             case '3':
                  playRound('scissors', getComputerChoice());
                  pushScore();
                  break;

    }
   
})



const results = document.querySelector('.results');

 function pushScore() {
    if(humanScore === 5) {
        results.textContent = 'You Won!!'
    } else if(computerScore === 5) {
        results.textContent = 'You Lost!, Good luck next time!'
    } else {
        results.textContent = `Your score: ${humanScore}, Computer score: ${computerScore}`;
    }
  }







