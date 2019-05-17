import React, { Component } from 'react';


class UserList extends Component {
	render() {
    const {users, userWhoLikedMovie} = this.props;

    {/*  Add if statement
    1. If the movie has been favorited, display a list of all of the user name who liked the movie.
    2. If the movie has NOT been favorited, display some text stating that no one liked the movie.
    
    */}
    
    if(!userWhoLikedMovie || userWhoLikedMovie.length === 0) {
      return <p>No one</p>
    }

    
    const listItem = userWhoLikedMovie.map(id => (
      <li key={id}>
        {users[id].name}
      </li>
    ));

    return <p>{listItem}</p>;
  } 
}

export default UserList;
