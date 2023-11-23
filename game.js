const choices = ["rock", "paper", "scissors", "lizard", "spock"];
let playerPoints = 0;
let computerPoints = 0;

function computerPlay() {
    return choices[Math.floor(Math.random() * 5)];
}

function playRound(playerSelection, computerSelection) {
    const outcomes = {
        "rock": {
            "scissors": "Rock smashes Scissors",
            "lizard": "Rock crushes Lizard",
        },

        "paper": {
            "rock": "Paper covers Rock",
            "spock": "Paper disproves Spock",
        },

        "scissors": {
            "paper": "Scissors cut Paper",
            "lizard": "Scissors decapitates Lizard",
        },

        "lizard": {
            "paper": "Lizard eats Paper",
            "spock": "Lizard poisons Spock",
        },

        "spock": {
            "scissors": "Spock smashes Scissors",
            "rock": "Spock vaporizes Rock",
        }
    };

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (outcomes[playerSelection][computerSelection]) {
        playerPoints++;
        return `You win! ${outcomes[playerSelection][computerSelection]}`;
    } else {
        computerPoints++;
        return `You lose! ${outcomes[computerSelection][playerSelection]}`;
    }
}

const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
const resetButton = document.createElement("button");
resetButton.textContent = "Reset Game";
document.body.appendChild(resetButton);

resetButton.addEventListener("click", () => {
    playerPoints = 0;
    computerPoints = 0;
    result.textContent = "Choose your move!";
});

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const roundResult = playRound(playerSelection, computerSelection);
        result.textContent = `Computer chose ${computerSelection}. ${roundResult}`;
        updatePoints();
    });
});

function updatePoints() {
    const pointsElement = document.querySelector(".points");
    pointsElement.textContent = `Player: ${playerPoints} - Computer: ${computerPoints}`;
}




