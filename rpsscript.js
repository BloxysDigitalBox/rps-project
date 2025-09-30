let humanScore = 0;
let computerScore = 0;

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
    if (humanSelection === "Rock" && computerSelection === "Paper") {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log("You lose! Paper beats Rock.");
        computerScore++;
        console.log("Computer Score:" + " " + computerScore);
        console.log("Your Score:" + " " + humanScore);
        return computerScore;
    }
    if (humanSelection === "Paper" && computerSelection === "Scissors") {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log("You lose! Scissors beat Paper.")
        computerScore++;
        console.log("Computer Score:" + " " + computerScore);
        console.log("Your Score:" + " " + humanScore);
        return computerScore;
    }
    if (humanSelection === "Scissors" && computerSelection === "Rock") {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log("You lose! Rock beats Scissors.")
        computerScore++;
        console.log("Computer Score:" + " " + computerScore);
        console.log("Your Score:" + " " + humanScore);
        return computerScore;
    }
    if (humanSelection === "Rock" && computerSelection === "Scissors") {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log("You win! Rock beats Scissors.")
        humanScore++;
        console.log("Computer Score:" + " " + computerScore);
        console.log("Your Score:" + " " + humanScore);
        return humanScore;
    }
    if (humanSelection === "Paper" && computerSelection === "Rock") {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log("You win! Paper beats Rock.")
        humanScore++;
        console.log("Computer Score:" + " " + computerScore);
        console.log("Your Score:" + " " + humanScore);
        return humanScore;
    }
    if (humanSelection === "Scissors" && computerSelection === "Paper") {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log("You win! Scissors beat Paper.")
        humanScore++;
        console.log("Computer Score:" + " " + computerScore);
        console.log("Your Score:" + " " + humanScore);
        return humanScore;
    }
    if (humanSelection === "Rock" && computerSelection === "Rock") {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log("Draw! One more time!")
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
    }
    if (humanSelection === "Paper" && computerSelection === "Paper") {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log("Draw! One more time!")
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
    }
    if (humanSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log("Draw! One more time!")
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
    }
}

playRound(humanSelection, computerSelection)