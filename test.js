const guessButton = document.getElementById('guessButton');
guessButton.addEventListener('click', () => {
    const guess = guessInput.value.toLowerCase();
    
    // Check if the guess is valid (single letter and not already guessed)
    if (guess.length !== 1 || guessedLetters.includes(guess)) {
      messageElement.textContent = 'Invalid guess or already guessed.';
      return;
    }
  
    guessedLetters.push(guess);
    guessedLettersElement.textContent = 'Guessed Letters: ${guessedLetters.join(', ')}';
    guessInput.value = '';  // Clear input field
  
    // Check if guess is in the word
    if (chosenWord.includes(guess)) {
      for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === guess) {
          wordDisplay[i] = guess;
        }
      }
      wordDisplayElement.textContent = wordDisplay.join(' ');
  
      // Check if the player has won
      if (!wordDisplay.includes('_')) {
        messageElement.textContent = 'Congratulations! You guessed the word!';
        guessButton.disabled = true;
      }
    } else {
      remainingGuesses--;
      remainingGuessesElement.textContent = 'Remaining Guesses: ${remainingGuesses}';
      
      // Check if the player has lost
      if (remainingGuesses === 0) {
        messageElement.textContent = 'Game over! The word was "${chosenWord}".';
        guessButton.disabled = true;
      }
    }
});
  