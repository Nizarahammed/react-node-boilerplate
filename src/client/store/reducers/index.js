import helloReducer from './hello';
import { combineReducers } from 'redux';


const RootReducer = combineReducers({
    helloReducer
  });
  
  export default RootReducer;