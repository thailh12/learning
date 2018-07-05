import {combineReducers} from 'redux';
import {reducer3} from './reducer_user';
import {reducer2} from './reducer_goal';
import {reducer1} from './reducer_completed';

export default combineReducers ({
  reducer1,
  reducer2,
  reducer3
})
