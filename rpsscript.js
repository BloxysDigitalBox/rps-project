// getComputerChoice //

//function getComputerChoice() {
//Math.floor(Math.random() * 3) + 1;
//return;
//}
//end

// Every number corresponds to a choice
// 1 = rock, 2 = paper, 3 = scissors.
// A separate function will take in the result, and assign a choice with it.

// getComputerChoice //

// getHumanChoice //

// The user will get a prompt that will take in their choice.
// "Enter a choice (rock, paper or scissors)"
// The user will input either rock, paper or scissors. 

// getHumanChoice //

// humanScore and computerScore //

// let humanScore = 0;
// let computerScore = 0;

// humanScore and computerScore //

// playGame //

// playRound //

// function playRound(humanChoice, computerChoice) {
// if {
// humanChoice = 1, computerChoice = 2;
// } then {
// sum(computerScore + 1);
// console.log("You lose! Paper beats Rock.")
// };
// ect.
// end

//const humanSelection = getHumanChoice();
//const computerRNG = getComputerChoice();

//playRound(humanSelection, computerRNG);

// playRound //

// playGame //

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
console.log(computerSelection);


function getHumanChoice() {
    prompt("Rock, paper or scissors?", "")
}