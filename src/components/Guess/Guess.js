import React from 'react';
import { range } from '../../utils';

function GuessCell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>;
}

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((num) => (
        <GuessCell
          key={num}
          letter={value?.[num]?.letter}
          status={value?.[num]?.status}
        />
      ))}
    </p>
  );
}

export default Guess;
