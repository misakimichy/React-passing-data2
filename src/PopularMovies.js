import React, { Component } from 'react';
import UserList from './UserList.js';


class PopularMovies extends Component {
	render() {
    
      const {user,userWhoLikedMovie, movie} = this.props
      
	  //Return JSX
      return (
        <div key={movie} className="popular-movie"> 
          <h3>{movie.name}</h3>
          <p>Liked By</p>

          {/* Extend UserList here */}
          <UserList user={user} userWhoLikedMovie={userWhoLikedMovie} />
        </div>
      );
    }
}

export default PopularMovies;