import React from 'react';

function GameOverBanner({numOfGuesses, answer, gameStatus}) {
  if(gameStatus === 1){
    return <div className="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{numOfGuesses} guesses</strong>.
              </p>
            </div>;
  }
  return <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>;
}

export default GameOverBanner;
