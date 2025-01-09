import React from 'react';
import '../styles/Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/counter/actions';

const HooksCounter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    
    const incrementHandler = () => {
        dispatch(increment());
    }

    const decrementHandler = () => {
        dispatch(decrement());
    }

    return (
    <div className='wrapper'>
      <button className='counterParts' id="addition" onClick={ incrementHandler }>
        Add+
      </button>
      <span className='counterParts' id="result">
        {count}
      </span>
      <button className='counterParts' id="subtraction" onClick={ decrementHandler }>
        Subtract-
      </button>
    </div>
  )
}

export default HooksCounter;
