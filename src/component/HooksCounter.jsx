import React from 'react';
import '../styles/Counter.css';
import { useSelector } from 'react-redux';
// import { increment, decrement } from '../redux/counter/actions';

const HooksCounter = ({ id }) => {
    const count = useSelector((state) => state.value);
  return (
    <div className='wrapper'>
      {/* increment, decrement, result */}
      {/* <button className='counterParts' id="addition" onClick={ increment }>
        Add+
      </button> */}
      <span className='counterParts' id="result">
        {count} - {id}
      </span>
      {/* <button className='counterParts' id="subtraction" onClick={ decrement }>
        Subtract-
      </button> */}
    </div>
  )
}

export default HooksCounter;
