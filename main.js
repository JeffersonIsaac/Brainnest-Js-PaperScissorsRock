const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const TIE = 0;
const WIN = 1;
const LOST = 2;

let computerScore = 0;
let playerScore = 0; 

console.log("The game starts now!")
function computerplay() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}
function playerChoice() {
    let playerSelection = prompt("Select Your choice", "Rock, Paper, or Scissor");

    while (!playerSelection) {
        console.log("Nothing selected.... Please Select Your choice");
        alert("Nothing selected.... Please Select Your choice");
        playerSelection = prompt("Please Select Your choice : Rock, Paper, or Scissor");
    }
    playerSelection = playerSelection.toUpperCase();
    if ((playerSelection == "ROCK") || (playerSelection == "SCISSORS") || (playerSelection == "PAPER")) {
       return playerSelection;
    } else {
        alert("please enter valid selection between rock, paper, scissor");
        console.log("please enter valid selection between rock, paper, scissor");
        playerSelection = playerChoice();
        return playerSelection;
    }
}
function playRound(computerSelection,playerSelection){
    if (playerSelection === computerSelection) {
        return "It's a tie, try again!";
    } else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            computerScore++;
            return "Computer has won! Current score: " + computerScore;
        } else {
            playerScore++;
            return "You have won! Current score: " + playerScore;
            }    
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            computerScore++;
            return "Computer has won! Current score: " + computerScore;        
        } else {
            playerScore++;
            return "You have won! Current score: " + playerScore;
            }
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            computerScore++;
            return "Computer has won! Current score: " + computerScore;
        } else {
            playerScore++;
            return "You have won! Current score: " + playerScore;
        }
    } 
}
function game(){
    let rounds;
    for (let i = 0; i < 5; i++){
        rounds = (i + 1);
        let playerSelection = playerChoice();
        let computerSelection = computerplay();
        console.log("Round: " + rounds);
        console.log("Player chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);
        console.log(playRound(computerSelection,playerSelection));
    }
    console.log("The winner is: " + winner());
}
function winner(){
    if (playerScore > computerScore){
        return "Player! with total score: " + playerScore;
    } else if (playerScore < computerScore){
        return "Computer! with score: " + computerScore;
    } else {
        return " No one! It's a draw!"
    }
}

game();
