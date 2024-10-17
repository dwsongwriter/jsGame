// DOM elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const resultDiv = document.getElementById('result');
const resetBtn = document.getElementById('reset');

// Array of possible choices
const choices = ['rock', 'paper', 'scissors'];

// Event listeners for each button
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

// Reset game
resetBtn.addEventListener('click', resetGame);

// Function to handle game logic
function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);
  resultDiv.innerHTML = `You chose ${userChoice}, computer chose ${computerChoice}. ${winner}`;
}

// Randomly selects the computer's choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Determines the winner
function determineWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  }
  if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'scissors' && computer === 'paper') ||
    (user === 'paper' && computer === 'rock')
  ) {
    return 'You win!';
  } else {
    return 'Computer wins!';
  }
}

// Function to reset the game
function resetGame() {
  resultDiv.innerHTML = 'Choose your move!';
}
