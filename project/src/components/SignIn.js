import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import reducer from '../reducers';
import rootSaga from '../sagas';
import {LOGIN_REQUEST} from '../constants';
import {compose} from 'redux';
import {connect} from 'react-redux';
import { 
  makeSelectLogin,makeSelectUsername} from '../selector';
import { createStructuredSelector } from 'reselect';
import injectReducer from '../utils/injectReducer';
import injectSaga from '../utils/injectSaga';

class SignIn extends Component {
componetDidMount(){
  this.props.dispatch(LOGIN_REQUEST);
}
  render() {
    return (<div>
      <h1>
        Log In
      </h1>
      <div className="form">
        <RaisedButton href="http://localhost:3000/home" label="Home " primary={true}/>
        <RaisedButton href="http://localhost:3000/signup" label="Sign Up " />
        <Paper >
          <TextField hintText="User name" underlineShow={false}/>
          <Divider/>
          <TextField hintText="Password" underlineShow={false} type="password"/>
          <Divider/>
        </Paper>
        <RaisedButton label="Log In "/>
      </div>
    </div>)
  }
}

export function mapDispatchToProps(dispatch){
  return {
    dispatch,
  };
}
const mapStateToProps = createStructuredSelector({
  username:makeSelectUsername(),
  login:makeSelectLogin()
});

const withConnect = connect(mapDispatchToProps, mapStateToProps);
const withReducer = injectReducer({key:'login', reducer});
const withSaga = injectSaga({key: 'login', rootSaga});
export default compose(withConnect, withSaga, withReducer)(SignIn);
