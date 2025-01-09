import React from 'react';
import '../styles/Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/counter/actions';

const HooksCounter = ({ id }) => {
    const count = useSelector((state) => state.value);
    const dispatch = useDispatch();
    
    const incrementHandler = (value) => {
        dispatch(increment(value));
    }

    const decrementHandler = (value) => {
        dispatch(decrement(value));
    }

    return (
    <div className='wrapper'>
      <button className='counterParts' id="addition" onClick={ () =>  incrementHandler(7) }>
        Add+
      </button>
      <span className='counterParts' id="result">
        {count} - {id}
      </span>
      <button className='counterParts' id="subtraction" onClick={ () => decrementHandler(7) }>
        Subtract-
      </button>
    </div>
  )
}

export default HooksCounter;
