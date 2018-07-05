import React from 'react';

class App extends React.Component {
  render(){
    return (
      <div className="app">
        <div>
          log in
        </div>
        <input placeholder="username" type="text"/> <br/>
        <input placeholder="password" type="password" /> <br/>
        <button>log in</button>
      </div>
    )
  }
}
export default App;
