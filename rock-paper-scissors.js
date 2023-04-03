let playerScore = 0;
let computerScore = 0;
const title = document.querySelector(".title");
const buttons = document.querySelectorAll("button");
const pScore = document.querySelector("#player");
const cScore = document.querySelector("#computer");

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
        title.textContent = `It's a tie! Both chose ${playerSelection}`;
    } else if ((playerSelection === "rock" && computerSelection === "scissors") || 
        (playerSelection === "paper" && computerSelection === "rock") || 
        (playerSelection === "scissors" && computerSelection === "paper")) {
        title.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        giveScore("player");
        pScore.textContent = `${playerScore}`;
        if (isGameOver()) {
            title.textContent = `You Won!!!`
        }
    } else if ((playerSelection === "rock" && computerSelection === "paper") || 
        (playerSelection === "paper" && computerSelection === "scissors") || 
        (playerSelection === "scissors" && computerSelection === "rock")) {
        title.textContent = `You Lost! ${computerSelection} beats ${playerSelection}`
        giveScore("computer");
        cScore.textContent = `${computerScore}`;
        if (isGameOver()) {
            title.textContent = `You Lost!`;
        }
    }
}

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playRound(button.className, getComputerChoice());
    });
});

