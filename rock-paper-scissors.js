function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock"
    } else if (choice === 1) {
        return "Paper"
    } else if (choice === 2) {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "r" && computerSelection === "p") {
        return "Paper Beats Rock, You Lose!"
    } else if (playerSelection === "r" && computerSelection === "s") {
        return "Rock Beats Scissors, You Win!"
    } else if (playerSelection === "p" && computerSelection === "s") {
        return "Scissors Beats Paper, You Lose!"
    } else if (playerSelection === "p" && computerSelection === "r") {
        return "Paper Beats Rock, You Win!"
    } else if (playerSelection === "s" && computerSelection === "p") {
        return "Scissors Beats Paper, You Win!"
    } else if (playerSelection === "s" && computerSelection === "r") {
        return "Rock Beats Scissors, You Lose!"
    }
}
