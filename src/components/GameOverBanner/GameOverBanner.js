import React from 'react';

function GameOverBanner({numOfGuesses, answer, gameStatus, restartGame}) {
  const [hidden, setHidden] = React.useState(false);
  function onRestart(){
    setHidden(false);
    restartGame();
  }
  return <div className={(gameStatus === 1 ? 'happy banner' : 'sad banner') + ' ' + (hidden ? 'visually-hidden' : '')}>
    <div className='btn-wrap'>
      <button className='modal-btn restart-btn btn-border' onClick={onRestart}>Restart Game</button>
      <button className='modal-btn close-btn btn-border' onClick={() => setHidden(true)}>Close</button>
    </div>
    {gameStatus === 1 ? <p>
                <strong>Congratulations!</strong> Got it in
                <strong> {numOfGuesses} guess{numOfGuesses > 1 ? 'es' : ''}</strong>.
              </p> : <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>}
  </div>
}

export default GameOverBanner;
