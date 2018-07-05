import {take, put, call} from 'redux-saga';
import {
  SUBMIT,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from './const'
import {success,
fail,
} from './action';

export function getSyn(word){
  fetch(`https://api.datamuse.com/words?ml=${word}&&max=10`)
    .then(response => response.json()).then(json => {
      this.setState({syn: json})
    })
}

export function getAnt(word){
  fetch(`https://api.datamuse.com/words?rel_ant=${word}&&max=10`)
      .then(response => response.json()).then(json => {
      this.setState({ant: json})
    })
}

export default function* getData(){
try {
    yield takeLastest(SUBMIT, getSyn, getAnt);
    yield put(success);
  } catch(error){
    yield put(fail);
  }
}
