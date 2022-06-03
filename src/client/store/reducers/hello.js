import * as actionTypes from '../actions/actionTypes';

const helloReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.HELLO_CALL: {
      const helloText = action.payload ? action.payload : {};
      return {
        ...state, helloText,
      };
    }
    default:
      return state;
  }
};

export default helloReducer;
