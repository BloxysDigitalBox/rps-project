

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



function playGame() {
    
// Scores

    let humanScore = 0;
    let computerScore = 0;

// Scores

function playRound(humanSelection, computerSelection) {

// Round Function

    if (humanSelection === "Rock" && computerSelection === "Paper" || 
        humanSelection === "Paper" && computerSelection === "Scissors" || 
        humanSelection === "Scissors" && computerSelection === "Rock") 
        
    {
        console.log("You Chose: " + humanSelection);
        console.log("Computer Chose: " + computerSelection);
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
        console.log("You Chose: " + humanSelection);
        console.log("Computer Chose: " + computerSelection);
        console.log('%cYou win! ', 'font-weight: bold;');
        console.log(humanSelection + " beats " + computerSelection + ".");
        humanScore++;
        console.log("Computer Score: "  + computerScore);
        console.log("Your Score: " + humanScore);
        return humanScore;
    }

    else {
        console.log("You Chose: " + humanSelection);
        console.log("Computer Chose: " + computerSelection);
        console.log('%cTie! ', 'font-weight: bold;')
        console.log("Computer Score: " + computerScore);
        console.log("Your Score: " + humanScore);   
    }
    
// Round Function

}
console.log(" ");
console.log("%c                     Round 1", 'font-weight: bold;');
console.log(" ");
playRound(getHumanChoice(), getComputerChoice());

console.log(" ");
console.log("%c                     Round 2", 'font-weight: bold;');
console.log(" ");
playRound(getHumanChoice(), getComputerChoice());

console.log(" ");
console.log("%c                     Round 3", 'font-weight: bold;');
console.log(" ");
playRound(getHumanChoice(), getComputerChoice());

console.log(" ");
console.log("%c                     Round 4", 'font-weight: bold;');
console.log(" ");
playRound(getHumanChoice(), getComputerChoice());

console.log(" ");
console.log("%c                     Round 5", 'font-weight: bold;');
console.log(" ");
playRound(getHumanChoice(), getComputerChoice());

console.log(" ");
console.log("%c                   Final Result", 'font-weight: bold;');
console.log(" ");

if (humanScore > computerScore) {
    console.log("%cCongrats! You've bested a computer at pure luck.", 'font-weight: bold;')
} else if (humanScore < computerScore) {
    console.log("%cYou lost. The computer uprising has begun.", 'font-weight: bold;')
} else {
    console.log("%cYou tied with the computer. Balance, at last.", 'font-weight: bold;')
}

}

playGame();