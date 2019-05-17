import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PopularMovies from './PopularMovies.js'

/*
Display a list of movies where each movie contains a list of users that favorited it.

For detailed instructions, refer to instructions.md.
*/

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jon Snow',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Arya Stark',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Tyrion Lannister',
    userName: 'user123',
  },
  4: {
    id: 3,
    name: 'Sansa Stark',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Petyr Baelish',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Daenerys Targaryen',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'The Three Musketeers',
  },
  2: {
    id: 2,
    name: 'Mission Impossible',
  },
  3: {
    id: 3,
    name: 'The Equalizer 2',
  },
  4: {
    id: 4,
    name: 'Dragon Ball Z',
  },
  5: {
    id: 5,
    name: 'Game of Thrones',
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.usersByMovie = {};

    profiles.forEach(profile => {
      const movieID = profile.favoriteMovieID;
      
      if (this.usersByMovie[movieID]) {
        this.usersByMovie[movieID].push(profile.userID);
      } else {
        this.usersByMovie[movieID] = [profile.userID];
      }
    });
  }
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>How Popular is Your Favorite Movie?</h2>
            {/* Components comes below */}
            <PopularMovies
              userByMovie={this.usersByMovie}
              users={users}
              movies={movies}
            />
      </div>
    );
  }
}

export default App;
