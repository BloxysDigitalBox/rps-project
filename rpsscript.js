var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let computerRNG = Math.floor(Math.random() * 3) + 1;

    if (computerRNG === 1) {
            return "Rock";
    } else if 
        (computerRNG === 2) {
            return "Paper";
    } else {
            return "Scissors";
        }
}

const computerSelection = getComputerChoice();


function getHumanChoice() {
    let humanChoice = prompt("Rock, paper or scissors?");
    
    if (humanChoice.toLowerCase() === "rock") {
            return "Rock";
    } else if
        (humanChoice.toLowerCase() === "paper") {
            return "Paper";
    } else (humanChoice.toLowerCase() === "scissors") 
            { return "Scissors"; }
} 

const humanSelection = getHumanChoice();


function playRound() {
    if (humanSelection = "Rock", computerSelection = "Paper") {
        console.log("You lose! Paper beats Rock.");
        return computerScore++;
    }
    if (humanSelection = "Paper", computerSelection = "Scissors") {
        console.log("You lose! Scissors beat Paper.")
        return computerScore++;
    }
    if (humanSelection = "Scissors", computerSelection = "Rock") {
        console.log("You lose! Rock beats Scissors.")
        return computerScore++;
    }
    if (humanSelection = "Rock", computerSelection = "Scissors") {
        console.log("You win! Rock beats Scissors.")
        return humanScore++;
    }
    if (humanSelection = "Paper", computerSelection = "Rock") {
        console.log("You win! Paper beats Rock.")
        return humanScore++;
    }
    if (humanSelection = "Scissors", computerSelection = "Paper") {
        console.log("You win! Scissors beat Paper.")
        return humanScore++;
    }
}

playRound (humanSelection, computerSelection)