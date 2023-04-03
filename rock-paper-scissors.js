let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else if (choice === 2) {
        return "scissors";
    }
}

function giveScore(winner) {
    if (winner === "player") {
        return playerScore += 1;
    } else if (winner === "computer") {
        return computerScore += 1;
    }
}

function isGameOver() {
    if (playerScore > 4 || computerScore > 4) {
        playerScore = 0;
        computerScore = 0;
        return true;
    }
    return false;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {

    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) {
            giveScore("player");
    } else if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) {
            giveScore("computer");
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className, getComputerChoice());
    });
});

