import React from 'react';
function GuessKeyboard({letters}) {
  let row1 = letters.slice(0,10);
  let row2 = letters.slice(10,19);
  let row3 = letters.slice(19);
  return <div className='kb-wrapper'>
    <div className='kb-row'>
      {row1.map(el => <button className={`cell kb-letter ${el.status}`} key={el.letter}>{el.letter}</button>)}
    </div>
    <div className='kb-row'>
      {row2.map(el => <button className={`cell kb-letter ${el.status}`} key={el.letter}>{el.letter}</button>)}
    </div>
    <div className='kb-row'>
      {row3.map(el => <button className={`cell kb-letter ${el.status}`} key={el.letter}>{el.letter}</button>)}
    </div>
  </div>;
}

export default GuessKeyboard;
