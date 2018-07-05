import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {Router, Route, browserHistory} from 'react-router';
import {firebaseApp} from './firebase';
import reducer from './reducers/combine';
import {logUser} from './actions/action';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
  //  console.log('user has signed on or up', user);
    const {email} = user;
    store.dispatch(logUser(email))
    browserHistory.push('/app');
  } else {
  //  console.log('user has signed out or still needs to sign in.');
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path='/' history={browserHistory}>
      <Route path='/app' component={App}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
  </Router>
  </Provider>,
  document.getElementById('root')
);
