import React, { Component } from 'react';
import MovieCard from './MovieCard.js';


class PopularMoives extends Component {
	render() {
      console.log('props', this.props);
      
      const movieCards = object.keys(movies).map(id => (
        <MovieCard
        	key={id}
            users={users}
  			usersWhoLikedMovie={usersByMovie[id]}
        	movieInfo={movies[id]}
        />
      ));
	
	  //Return JSX
      return <ul>{movieCards}</ul>;
    }
}

export default PopularMoives;