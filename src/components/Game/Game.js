import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  function onNewGuess(guess){
    const newGuesses = [...guessList, guess];
    setGuessList(newGuesses);
  }
  return <>
    <GuessList items={guessList}></GuessList>
    <GuessInput onNewGuess={onNewGuess}/>
  </>;
}

export default Game;
