import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);
  const [gameStatus, setGameStatus] = React.useState(0); // 0 none, -1 lost, 1 won

  function onNewGuess(guess){
    const checkGuessRes = checkGuess(guess, answer);
    const newGuesses = [...guessList, checkGuessRes];
    setGuessList(newGuesses);
    checkGameOver(guess, newGuesses.length);
  }

  function checkGameOver(guess, numOfGuesses){
    console.log(NUM_OF_GUESSES_ALLOWED, numOfGuesses);
    if(guess === answer){
      setGameStatus(1);
    }
    else if(NUM_OF_GUESSES_ALLOWED - numOfGuesses <= 0){
      setGameStatus(-1);
    }
  }

  return <>
    <GuessList items={guessList}></GuessList>
    <GuessInput onNewGuess={onNewGuess} gameStatus={gameStatus}/>
    {gameStatus !== 0 && <GameOverBanner numOfGuesses={guessList.length} answer={answer} gameStatus={gameStatus}></GameOverBanner>}
  </>;
}

export default Game;
