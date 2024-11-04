import React, { useState } from 'react';
import './home.css';

function Index() {
  const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
  };

  const submitGuess = () => {
    const userGuess = parseInt(guess);
    setAttempts(attempts + 1);

    if (userGuess === randomNumber) {
      setFeedback('Congratulations! You guessed the correct number!');
      setGameOver(true);
    } else if (userGuess > randomNumber) {
      setFeedback('Your guess is too high. Try again!');
    } else {
      setFeedback('Your guess is too low. Try again!');
    }
  };

  const playAgain = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setFeedback('');
    setAttempts(0);
    setGameOver(false);
  };

  return (
    <div className="container">
      <h1>Welcome to the Mystery Number Guessing Game!</h1>
      <div className="banner">
        <img src="random.webp" alt="Banner" />
      </div>
      <div className="game">
        <p>Guess a number between 1 and 100:</p>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          min="1"
          max="100"
          disabled={gameOver}
        />
        <button onClick={submitGuess} disabled={gameOver}>Submit Guess</button>
        <p>{feedback}</p>
        <p>Number of attempts: {attempts}</p>
        {gameOver && <button onClick={playAgain}>Play Again</button>}
      </div>
    </div>
  );
}

export default Index;