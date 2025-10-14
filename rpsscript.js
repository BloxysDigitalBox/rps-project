

// Scores

    let humanScore = 0;
    let computerScore = 0;

// Scores

// ComputerChoice

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

// ComputerChoice

// HumanChoice

function getHumanChoice() {
    let humanPrompt = prompt("Rock, paper or scissors?");
    
    if (humanPrompt.toLowerCase() === "rock") {
            return "Rock";
    } else if
        (humanPrompt.toLowerCase() === "paper") {
            return "Paper";
    } else (humanPrompt.toLowerCase() === "scissors") 
            { return "Scissors"; }
} 

// HumanChoice

const humanSelection = getHumanChoice();

function playGame() {

function playRound(humanSelection, computerSelection) {

// Round Function

    if (humanSelection === "Rock" && computerSelection === "Paper" || 
        humanSelection === "Paper" && computerSelection === "Scissors" || 
        humanSelection === "Scissors" && computerSelection === "Rock") 
        
    {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log('%cYou lost! ', 'font-weight: bold;');
        console.log(computerSelection + " beats " + humanSelection + ".");
        computerScore++;
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);
        return computerScore;
    }
    
    if (humanSelection === "Rock" && computerSelection === "Scissors" || 
        humanSelection === "Paper" && computerSelection === "Rock" || 
        humanSelection === "Scissors" && computerSelection === "Paper") 
        
    {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log('%cYou win! ', 'font-weight: bold;');
        console.log(humanSelection + " beats " + computerSelection + ".");
        humanScore++;
        console.log("Computer Score: "  + computerScore);
        console.log("Your Score: " + humanScore);
        return humanScore;
    }

    else {
        console.log("Computer Chose: " + computerSelection);
        console.log("You Chose: " + humanSelection);
        console.log('%cDraw! ', 'font-weight: bold;')
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);   
    }

// Round Function

}

}
