import React from 'react';
import {connect} from 'react-redux';
import {submit} from './action';

class App extends React.Component {
  render(){
    return (
      <div className="form-control">
        <input  placeholder="find your word here"
        onChange={(e)=> this.setState({word: e})}
      />
        <button onClick={this.props.dispatch(submit(this.props.word))}>find</button>
        <div>{this.props.word}</div>
      </div>

    )
  }
}
function mapStateToProps (state) {
  return {
    word: state.word,
    syn: state.syn,
    ant: state.ant,
    isLoading: state.isLoading,
    error: state.error,
  }
};
function mapDispatchToProps(dispatch){
  return {
    dispatch,
  }
}
export default App = connect(mapStateToProps, mapDispatchToProps)(App);
