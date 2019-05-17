import React, { Component } from 'react';
import MovieCard from './MovieCard.js';


class PopularMovies extends Component {
	render() {
      //console.log('Prop',this.props);
      const {userByMovie, users, movies} = this.props

      const movieCards = Object.keys(movies).map(id => (
        <MovieCard key={id}
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
