import { userAPI } from "../api/api";
import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS'

let initialState = {
   postData: [
      {id: 1, message: 'This is react.js', likesCount: 12},
      {id: 2, message: 'Hello, how are you?', likesCount: 5},
      {id: 3, message: 'Welcome', likesCount: 14},
      ],
   newPostText: '',
   profile: null,
   status: '',
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
         };
         return  {
            ...state,
            postData: [...state.postData, newPost],
            newPostText: '',
         };
      case UPDATE_NEW_POST_TEXT: 
         return {
            ...state,
            newPostText: action.newText,
         };
      case SET_STATUS: 
         return {
            ...state,
            status: action.status,
         };
      case SET_USER_PROFILE: {
         return {...state, profile: action.profile}
      }
      default:
         return state;
      
   };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const getUserProfile = (userId) => (dispatch) =>{
   userAPI.getProfile(userId)
   .then(response => {
      dispatch(setUserProfile(response.data));
});
};

export const getStatus= (userId) => (dispatch) =>{ // thunk для получения статуса
   profileAPI.getStatus(userId)
   .then(response => {
      dispatch(setStatus(response.data));
});
};

export const updateStatus= (status) => (dispatch) =>{ // thunk для получения статуса
   profileAPI.updateStatus(status)
   .then(response => {
      if (response.data.data.resultCode == 0) {
         dispatch(setStatus(status));
      };  
});
};


export default profileReducer;