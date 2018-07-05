import {
  SUBMIT,
  FETCH_SUCCESS,
  FETCH_FAIL,
} from './const';
import {fromJS} from 'immutable'

 export const initState = fromJS({
   word: 'asfsdfs',
   syn: '',
   ant: '',
   isLoading: false,
   error: '',
 })

export default function reducer(state = initState,action){
  switch (action.type) {
    case SUBMIT:
      return state
        .set({isLoading: true});
    case FETCH_FAIL:
      return state
        .set({isLoading:false})
        .set({error:action.error});
    case FETCH_SUCCESS:
      return state
        .set({isLoading:false});
    default: return state;
  }
}
