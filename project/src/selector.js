import {createSelector} from 'reselect';

const selectUser = (state) => state.get('username');

const makeSelectLogin = () => createSelector(
  selectUser,
  (homeState) => homeState.get('login')
);
const makeSelectUsername = () => createSelector(
  selectUser,
  (homeState) => homeState.get('username')
);

export {
  selectUser,
  makeSelectLogin,
  makeSelectUsername,
};
