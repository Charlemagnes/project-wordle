import React from 'react';

function GuessInput({onNewGuess, gameStatus}) {
  const [guess, setGuess] = React.useState('');

  function onSubmit(event){
    event.preventDefault();
    const newGuess = guess;
    onNewGuess(newGuess);
    setGuess('');
  }

  return <form className="guess-input-wrapper" onSubmit={onSubmit} autoComplete='off'>
    <label htmlFor="guess-input">Enter guess:</label>
    <input minLength={5} maxLength={5} type="text" pattern="[a-zA-Z]{5}" disabled={gameStatus !== 0}
      autoComplete='off' id="guess-input" title="A 5 letter  word" 
      value={guess} onChange={(e) => setGuess(e.target.value.toUpperCase())}
    ></input>
  </form>
}

export default GuessInput;
