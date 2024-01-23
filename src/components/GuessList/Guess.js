import React from 'react';
import { range } from '../../utils';


function Guess({word, empty}){
    let wordArr = !!word ? [...word] : range(5);
    // return <></>
    return <p className='guess'>
        {wordArr.map((el, i) => {
            const letter = empty ? '' : el;
            return <span className='cell' key={i}>{letter}</span>
        })}
    </p>
}

export default Guess