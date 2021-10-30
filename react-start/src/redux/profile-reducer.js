const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   postData: [
      {id: 1, message: 'This is react.js', likesCount: 12},
      {id: 2, message: 'Hello, how are you?', likesCount: 5},
      {id: 3, message: 'Welcome', likesCount: 14},
      ],
   newPostText: 'Введите текст'
};

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST: 
         let newPost = {
            id: 5,
            message: state.newPostText,
            likesCount: 0
         };
         state.postData.unshift(newPost);
         state.newPostText = '';
         return state;
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText;
         return state;
      default:
         return state;
   };
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export default profileReducer;