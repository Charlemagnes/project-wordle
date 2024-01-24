import React from 'react';

function GameOverBanner({numOfGuesses, answer, gameStatus}) {
  const [hidden, setHidden] = React.useState(false);
  return <div className={(gameStatus === 1 ? 'happy banner' : 'sad banner') + ' ' + (hidden ? 'visually-hidden' : '')}>
    <button className='modal-close-btn' onClick={() => setHidden(true)}>close</button>
    {gameStatus === 1 ? <p>
                <strong>Congratulations!</strong> Got it in
                <strong> {numOfGuesses} guesses</strong>.
              </p> : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>}
  </div>
}

export default GameOverBanner;
