import React from 'react';
import '../styles/Counter.css';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/counter/actions';
import { increment as dynamicIncrement, decrement as dynamicDecrement } from '../redux/dynamicCounter/actions';

const VariableCounter = ({ count, increment, decrement, id }) => {
  return (
    <div className='wrapper'>
      {/* increment, decrement, result */}
      <button className='counterParts' id="addition" onClick={ increment }>
        Add+
      </button>
      <span className='counterParts' id="result">
        {count}
      </span>
      <button className='counterParts' id="subtraction" onClick={ decrement }>
        Subtract-
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    count: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic ? (value) => dispatch(dynamicIncrement(3)) : () => dispatch(increment()),
    decrement: ownProps.dynamic ? (value) => dispatch(dynamicDecrement(value)) : () => dispatch(decrement()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VariableCounter);
