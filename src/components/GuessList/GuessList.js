import React from 'react';
import Guess from './Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessList({items}) {

  return <div className='guess-results'>
    {range(NUM_OF_GUESSES_ALLOWED).map((el,i) => <Guess word={items[i]} empty={!items[i]} key={i}></Guess>)}
  </div>;
}

export default GuessList;
