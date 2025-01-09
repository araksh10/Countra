import React from 'react';
import '../styles/DynamicCounter.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/dynamicCounter/actions';

const DynamicHooksCounter = () => {
    const count = useSelector((state) => state.dynamicCounter.value);
    const dispatch = useDispatch();
    
    const incrementHandler = (value) => {
        dispatch(increment(value));
    }

    const decrementHandler = (value) => {
        dispatch(decrement(value));
    }

    return (
    <div className='DWrapper'>
      <button className='counterParts' id="addition" onClick={ () => incrementHandler(7) }>
        Add+
      </button>
      <span className='counterParts' id="result">
        {count}
      </span>
      <button className='counterParts' id="subtraction" onClick={ () => decrementHandler(3) }>
        Subtract-
      </button>
    </div>
  )
}

export default DynamicHooksCounter;
