import {createStore} from 'redux';

const store = createStore(reducer);

export function reducer(state=0,action){
  switch (action.type) {
    case INCRE:
      return state+1;
    case DECRE:
      return state-1;
    default: state;
  }
}
