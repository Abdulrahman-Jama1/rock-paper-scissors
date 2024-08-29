# rock-paper-scissors
# BELOW IS ME TRYING TO UNDERSTAND THE PROBLEM BY WRITING MY THOUGHT PROCESS
Create a new function named getComputerChoice.
Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.
Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.


UNDERSTAND THE PROBLEM: 

so i need to create a function that gives me randomly a choice from three values using Math.random. Math.random gives you a random number that's greater or euqal to 0 and less than 1.


PSEUDOCODE: 

- create function called getComputerChoice *
- declare varible called "random" and assign to it a random number from 0-2 *
- make a conditional that prints "rock" if random is equal to zero, and prints "paper" if random equal to one, and prints "scissors" if it's anything else (which is two) *


 Write the logic to get the human choice
Your game will be played by a human player. You will write a function that takes the user choice and returns it.

Create a new function named getHumanChoice.
Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
Hint: Use the prompt method to get the user’s input.
Test what your function returns by using console.log.


UNDERSTAND THE PROBLEM:
create a function that takes input from user and returnes that input in the console.

PSEUDOCODE:

- create function called getHumanChoice
- declare inside it variable called "choice" 
- assign to it a prompt to ask user for choice between (rock, paper and scissors)
- print the user input in the console





Step 5: Write the logic to play a single round
Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

Create a new function named playRound.
Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.



UNDERSTAND THE PROBLEM:
you'll be playing the game round by round. you will write a function that take both human and computer player choices as arguments, play a single round, increments the round winnder's score and logs a winner annoucement.


PSEUDOCODE:

- create function named playRound
- define two parameters for playRound: humanChoice and computerChoice. use these two parameters to take the human and computer choices as arguments
- make humanChoice parameter case-insensitive so that the player can input "rock", "Rock" etc and it will still work. 
- write code in playround function to console.log string value representing the round winner
- Increment the humanScore or computerScore variable based on the round winner.






Step 6: Write the logic to play the entire game
Your game will play 5 rounds. You will write a function named playGame that calls playRound to play 5 rounds, keeps track of the scores and declares a winner at the end.

Create a new function named playGame.
Move your playRound function and score variables so that they’re declared inside of the new playGame function
Play 5 rounds by calling playRound 5 times.
Hint: When you assign a function call to a variable, the return value of that function is assigned to the variable. Accessing the variable afterward will only provide the assigned value; it doesn’t recall the function. You need to recall the choice functions to get new choices for each round.
Re-work your previous functions or create more helper functions if necessary. Specifically, you may want to change the return values to something more useful.
If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.




UNDERSTAND THE PROBLEM: you'll need to play the game 5 times. you'll write a function that calls playRound to play 5 rounds. keep track of the scores and declares a winner at the end.

PSEUDOCODE: 
- create a new function named playGame
- move the playRound function and score variables so that they're declared inside of the new playGame function
- play 5 times by calling playRound 5 times
