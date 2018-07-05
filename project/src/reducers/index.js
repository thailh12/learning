import {fromJS} from 'immutable';

import { LOGIN_FAIL, LOGIN_SUCCESS} from '../constants';

export const initialState = fromJS({username: "", password: "", login: false});

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('login', true);
    case LOGIN_FAIL:
      return state
        .set('login', false);
    default:
      return state;
  }
}
export default reducer;
