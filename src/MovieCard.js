import React, { Component } from 'react';
import UserList from "./UserList.js";

class MovieCard extends Component {
    render() {
        const {users, userWhoLikedMovie, movieInfo} = this.props;

        // Return JSX
        return (
         <li key={movieInfo.id}>
           <h2>{movieInfo.name}</h2>
           <p>Liked By</p>
            <UserList 
                users={users}
                userWhoLikedMovie={userWhoLikedMovie}
            />
        </li>
        );
    }
}

export default MovieCard;
