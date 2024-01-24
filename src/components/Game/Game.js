import React from 'react';

import { sample } from '../../utils';
import { WORDS, keyboardLetters } from '../../data';
import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import GuessKeyboard from '../GuessKeyboard/GuessKeyboard';
import GameOverBanner from '../GameOverBanner/GameOverBanner';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS));
  // To make debugging easier, we'll log the solution in the console.
  console.info({ answer });
  const [guessList, setGuessList] = React.useState([]);
  // 0 none, -1 lost, 1 won
  const [gameStatus, setGameStatus] = React.useState(0);

  const [letters, setLetters] = React.useState(keyboardLetters);

  function onRestart(){
    setAnswer(sample(WORDS));
    setGuessList([]);
    setGameStatus(0);
    setLetters(keyboardLetters);
  }

  function onNewGuess(guess){
    const checkGuessRes = checkGuess(guess, answer);
    const newGuesses = [...guessList, checkGuessRes];
    setGuessList(newGuesses);
    checkGameOver(guess, newGuesses.length);
    checkUsedLetters(newGuesses.flat());
  }

  function checkUsedLetters(lettersInGuesses){
  // this should actually be used in GuessKeyboard but I will do it here
  // in the spirit of the exercise (we haven't gotten to implement useEffect yet)
  let onlyLetters = lettersInGuesses.map(x => x.letter);
    let newLetters = letters.map(el => {
      if(!onlyLetters.includes(el.letter)){
        return {
          letter: el.letter,
          status: 'unused'
        };
      }
      if(lettersInGuesses.some(guessLetter => el.letter === guessLetter.letter && guessLetter.status === 'correct')){
        return {
          letter: el.letter,
          status: 'correct'
        };
      }else if(lettersInGuesses.some(guessLetter => el.letter === guessLetter.letter && guessLetter.status === 'misplaced')){
        return {
          letter: el.letter,
          status: 'misplaced'
        };
      }else
      return {
        letter: el.letter,
        status: 'incorrect'
      };
    });
    setLetters(newLetters);
  }

  function checkGameOver(guess, numOfGuesses){
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
    <GuessKeyboard letters={letters}></GuessKeyboard>
    {gameStatus !== 0 && <GameOverBanner numOfGuesses={guessList.length} answer={answer} gameStatus={gameStatus} restartGame={onRestart}></GameOverBanner>}
  </>;
}

export default Game;
