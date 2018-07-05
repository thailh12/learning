import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

class SignUp extends Component {
  render() {
    return (<div>
      <h1>
        Register
      </h1>
      <div className="form">
        <RaisedButton href="http://localhost:3000/home" label="Home " primary={true}/>
        <RaisedButton href="http://localhost:3000/signin" label="Sign In "/>
        <Paper >
          <TextField hintText="User name" underlineShow={false}/>
          <Divider/>
          <TextField hintText="Password" underlineShow={false} type="password"/>
          <Divider/>
          <TextField hintText="Password" underlineShow={false} type="password"/>
          <Divider/>
        </Paper>
        <RaisedButton label="Sign Up "/>
      </div>
    </div>)
  }
}


export default SignUp;
