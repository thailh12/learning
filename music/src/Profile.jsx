import React, {Component} from 'react';
import './App.css';

class Profile extends Component {
  render() {
    let artist = {name: '', followers: {total: ''}};
    artist = this.props.artist !== null ? this.props.artist : artist;
    return(
      <div className='profile'>
        <img
        alt="Profile"
        className='profile-img'
    //    src={artist.images[0].url}
      />
        <div>{artist.name}</div>
        <div>{artist.followers.total}</div>
      </div>
    )
  }
};

export default Profile;
