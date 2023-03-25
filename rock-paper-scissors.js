function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "r"
    } else if (choice === 1) {
        return "p"
    } else if (choice === 2) {
        return "s"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    } else if (playerSelection === "r" && computerSelection === "p") {
        return "computer win!"
    } else if (playerSelection === "r" && computerSelection === "s") {
        return "player win!"
    } else if (playerSelection === "p" && computerSelection === "s") {
        return "computer win!"
    } else if (playerSelection === "p" && computerSelection === "r") {
        return "player win!"
    } else if (playerSelection === "s" && computerSelection === "p") {
        return "player win!"
    } else if (playerSelection === "s" && computerSelection === "r") {
        return "computer win!"
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Rock Paper or Scissors").charAt(0).toLowerCase();
        if (playRound(playerSelection, getComputerChoice()) === "computer win!") {
            computerScore += 1;
        } else if (playRound(playerSelection, getComputerChoice()) === "computer win!") {
            playerScore += 1;
        }
        console.log(`Computer Score is ${computerScore}`)
        console.log(`Your score is ${playerScore}`)
    }
    if (computerScore === 5) {
        return "You Lose!"
    } else if (playerScore === 5) {
        return "You Win!"
    }
}