import profileReducer from './profile-reducer';
import addPostActionCreator from './profile-reducer';
import ReactDOM from 'react-dom';
import App from '../App';
import React from 'react';



it('length of posts should be incremented', () => {
    let action = addPostActionCreator('RAP');
    let state = {
    posts: [ 
            { id: 1, message: "Whatcha gonna do?", likesCount: 3 }, 
            { id: 2, message: "When shall we go?", likesCount: 1 } 
           ]
};
    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(5);
});