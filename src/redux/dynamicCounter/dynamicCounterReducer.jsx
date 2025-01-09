import { dynamicINCREMENT, dynamicDECREMENT } from './actionTypes';

const initialState = {
    value:0,
};

const dynamicCounterReducer = (state = initialState, action) => {
      switch (action.type) {
        case dynamicINCREMENT: 
            return {
                ...state,
                value : state.value + action.payload,
            }

        case dynamicDECREMENT: 
            return {
                ...state,
                value : state.value - action.payload,
            }
      
        default:
            return state;
      }
};

export default dynamicCounterReducer;
