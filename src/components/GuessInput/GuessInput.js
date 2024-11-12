import React, { useState } from 'react';

function GuessInput({ handleSubmitGuesses, isGameOver }) {
  const [tentativeGuess, setTentativeGuess] = useState('');
  const handleChange = (e) => {
    setTentativeGuess(e.target.value.toUpperCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tentativeGuess.length !== 5) return;
    console.log(tentativeGuess);
    handleSubmitGuesses(tentativeGuess);
    setTentativeGuess('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        disabled={isGameOver}
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
