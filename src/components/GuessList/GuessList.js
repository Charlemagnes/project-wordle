import React from 'react';
import Guess from './Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessList({items}) {

  return <div className='guess-results'>
    {items.length > 0 && 
      items.map((el,i) => <Guess word={el} empty={false} key={i}></Guess>)}
    {items.length < 6 && 
      range(0, NUM_OF_GUESSES_ALLOWED - (items.length ?? 0)).map((el,i) => <Guess word={null} empty={true} key={i}></Guess>)}
  </div>;
}

export default GuessList;
