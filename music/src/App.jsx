import React, {Component} from 'react';
import './App.css';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Profile from './Profile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null
    }
  }
  search() {
    const BASE_URL = 'https://api.spotify.com/v1/search';
    const FETCH_URL = `${BASE_URL}q=${this.state.query}&type=aritst&limit=1`;
    fetch(FETCH_URL, {method: 'GET'})
    .then(reponse => reponse.json())
    .then(json => {
      const artist = json.artists.items(0);
      this.setState({artist});
    })
  }

  render() {
    return (
      <div className='App'>
        <div className='App-title'>
          Music Master
        </div>
        <FormGroup>
          <InputGroup>
            <FormControl text="text"
              placeholder="Search for an Artist"
              value={this.state.query} onChange={event => {
              this.setState({query: event.target.value})
            }} onKeyPress={event => {
              if (event.key === 'Enter') {
                this.search()
              }
            }}/>
            <InputGroup.Addon>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Profile
          artist = {this.state.artist}
        />
        <div className="Galery">
          Gallery
        </div>
      </div>
    )
  }
}

export default App;
