import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { BrowserRouter, Route } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './index.css';
import {Provider} from 'react-redux';
import {initialState} from './reducers';

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={initialState}>
      <BrowserRouter>
        <div>
          <Route path="/home" component={HomePage} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </div>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,

  document.getElementById('root')
)
