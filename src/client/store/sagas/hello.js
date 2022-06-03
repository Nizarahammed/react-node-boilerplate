import {
    put,
    takeEvery,
    all,
  } from 'redux-saga/effects';
  import {HELLO_CALL_SAGA} from '../actions/actionTypes';


  export function* helloCall() {
    try {
      yield put({
        type: HELLO_CALL_SAGA,
        payload: { text: 'Katha Utsav' },
      });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e);
    }
  }