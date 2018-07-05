import {SET_GOALS} from '../constants';

export const reducer2 = (state = [], action) => {
  switch (action.type) {
    case SET_GOALS:
      const {goals} = action;
      return goals;
    default: return state;
  }
}
