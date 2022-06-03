import {
    put,
    takeEvery,
    all,
  } from 'redux-saga/effects';

import * as actionTypes from '../actions/actionTypes';
import {helloCall} from './hello';

export  function* watchHelloCall() {
  yield all([
     takeEvery(actionTypes.HELLO_CALL, helloCall)
  ]);
}

