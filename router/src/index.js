import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

ReactDOM.render(
  <Router path='/' history={browserHistory}>

</Router>,
  document.getElementById('root')
)
