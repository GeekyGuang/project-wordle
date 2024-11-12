import React, { useState } from 'react';

function GuessInput() {
  const [guess, setGuess] = useState('');
  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (guess.length !== 5) return;
    console.log(guess);
    setGuess('');
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        required
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
      />
    </form>
  );
}

export default GuessInput;
