import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import App from './App';
import reducer from './reducer';
import {createStore} from 'redux';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
,
  document.getElementById('root')
)
