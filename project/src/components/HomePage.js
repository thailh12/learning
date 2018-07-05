import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class HomePage extends Component {
  render(){
    return (
      <div>
        <h1> Home </h1>
        <div>
        <RaisedButton href="http://localhost:3000/signin" label="Sign In"/>
        <RaisedButton href="http://localhost:3000/signup" label="Sign Up"/>

      </div>
    </div>

    )
  }
}
export default HomePage;
