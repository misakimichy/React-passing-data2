import React, { Component } from 'react';


class UserList extends Component {
	render() {
    const {user, userWhoLikedMovie} = this.props;

    {/*  Add if statement
    1. If the movie has been favorited, display a list of all of the user name who liked the movie.
    2. If the movie has NOT been favorited, display some text stating that no one liked the movie.
    
    */}
    
    if(userWhoLikedMovie === 0) {
      return <p>No one liked this movie.</p>
    }

    // const listItem = userWhoLikedMovie.map(id => (
    //   <li key={id}>
    //     <p>{user[id].name}</p>
    //   </li>
    // ));

    return <p>Hello world</p>;
  } 
}

export default UserList;
