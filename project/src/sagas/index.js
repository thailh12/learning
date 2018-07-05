import {call, put, take} from 'redux-saga/effects';
import {LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS} from '../constants';

export function* login() {
  try {
    yield put({type: LOGIN_SUCCESS});
  } catch (error) {
    yield put({type: LOGIN_FAIL});
  }
}

export default function* rootSaga() {
  while (true) {
    yield take(LOGIN_REQUEST);
    yield call(login);
  }
}
