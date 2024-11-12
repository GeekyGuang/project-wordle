import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import { checkGuess } from '../../game-helpers';
import Banner from '../Banner/Banner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState('running');
  const handleSubmitGuesses = (tentativeGuess) => {
    const nextGuesses = [
      ...guesses,
      {
        id: crypto.randomUUID(),
        value: checkGuess(tentativeGuess, answer),
      },
    ];
    setGuesses(nextGuesses);
    if (tentativeGuess === answer) {
      setGameStatus('won');
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  };
  return (
    <>
      {gameStatus !== 'running' && <Banner round={guesses.length} gameStatus={gameStatus} answer={answer} />}
      <GuessResults guesses={guesses} />
      <GuessInput
        handleSubmitGuesses={handleSubmitGuesses}
        isGameOver={gameStatus !== 'running'}
      />
    </>
  );
}

export default Game;
