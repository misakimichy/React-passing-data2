import React, { Component } from 'react';
import UserList from './UserList.js';


class PopularMovies extends Component {
	render() {
      console.log('Prop',this.props);
      const {userByMovie, users, movies} = this.props

      const movieCards = object.keys(movies).map(id => (
        <MovieInfo key={id}
        users={users}
        userWhoLikedMovie={userByMovie[id]}
        movieInfo={movies[id]}
        />
      ))
      
	  //Return JSX
      return <div>{movieCards}</div>;
    }
}

export default PopularMovies;
