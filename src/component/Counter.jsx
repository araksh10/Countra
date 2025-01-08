import React from 'react';
import '../styles/Counter.css';
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/counter/actions';

const Counter = ({ count, increment, decrement, id }) => {
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
    count: state.value,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: (value) => dispatch(increment(value)),
    decrement: (value) => dispatch(decrement(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
