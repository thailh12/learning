import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import AppBarExample from './AppBar';
import DividerEx from './Divider';
const App = () => (
  <MuiThemeProvider>
    <DividerEx />
    <AppBarExample />
     <MyAwesomeReactComponent />
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
