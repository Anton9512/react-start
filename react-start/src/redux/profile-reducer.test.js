import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import {render, screen} from "@testing-library/react";
import App from "../App";
import React from "react";

let state = {
   postData: [
      {id: 1, message: 'React', likesCount: 12},
      {id: 2, message: 'Hello, how are you?', likesCount: 5},
      {id: 3, message: 'Welcome', likesCount: 14},
   ],
};

it('length of posts should be incremented', () => {
   // 1. test data
   let action = addPostActionCreator('Hello hello');
   // 2. action
   let newState = profileReducer(state , action);

   // 3. expectation
   expect( newState.postData.length).toBe(4);
});

it('message of new post should be correct', () => {
   // 1. test data
   let action = addPostActionCreator('Hello hello');

   // 2. action
   let newState = profileReducer(state , action);

   // 3. expectation
   expect( newState.postData[3].message).toBe('Hello hello');
});

it('after deleted length of messages should be decremented', () => {
   // 1. test data
   let action = deletePost(1);

   // 2. action
   let newState = profileReducer(state , action);

   // 3. expectation
   expect( newState.postData.length).toBe(2);
});

it('after deleted length shouldn`t be changed', () => {
   // 1. test data
   let action = deletePost(1000);

   // 2. action
   let newState = profileReducer(state , action);

   // 3. expectation
   expect( newState.postData.length).toBe(3);
});