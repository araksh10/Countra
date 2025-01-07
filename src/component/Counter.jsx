import React from 'react';
import '../styles/Counter.css';

const Counter = () => {
  return (
    <div className='wrapper'>
      {/* increment, decrement, result */}
      <button className='counterParts' id="addition">
        Add+
      </button>
      <span className='counterParts' id="result">
        0
      </span>
      <button className='counterParts' id="subtraction">
        Subtract-
      </button>
    </div>
  )
}

export default Counter;
