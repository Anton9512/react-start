const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';

let initialState = {
   postData: [
      {id: 1, message: 'This is react.js', likesCount: 12},
      {id: 2, message: 'Hello, how are you?', likesCount: 5},
      {id: 3, message: 'Welcome', likesCount: 14},
      ],
   newPostText: '',
   profile: null,
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
      case SET_USER_PROFILE: {
         return {...state, profile: action.profile}
      }
      default:
         return state;
      
   };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;