let store = {
   _state: {
      profilePage: {
         postData: [
            {id: 1, message: 'This is react.js', likesCount: 12},
            {id: 2, message: 'Hello, how are you?', likesCount: 5},
            {id: 3, message: 'Welcome', likesCount: 14},
            ],
         newPostText: 'Введите текст'
      },
      dialogsPage: {
         dialogsData: [
            {id: 1, name: 'Anton',},
            {id: 2, name: 'Vasiliy',},
            {id: 3, name: 'Jenya',},
            {id: 4, name: 'Petr',},
            {id: 5, name: 'Katya',},
            {id: 6, name: 'Sasha',},
            ],
         messages: [
            {id: 1, message: 'Hi!',},
            {id: 2, message: 'How are you?',},
            {id: 3, message: 'Hello!Would you like to buy our react courses?',},
            {id: 4, message: 'Hello!!'},
            {id: 5, message: 'LOL!',},
            {id: 6, message: 'Bye.',},
          ],
      }
    },
    getState() {
       return this._state;
    },
   _callSubscriber() {
      console.log(' ')
   },
   subscribe(observer) {
      this._callSubscriber = observer;
   },
   addPost() {
      let newPost = {
         id: 5,
         message: this._state.profilePage.newPostText,
         likesCount: 0
      }
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText;
      this._callSubscriber(this._state);
    },
   dispatch(action) {
      if (action.type === 'ADD-POST') {
         let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
         };
         this._state.profilePage.postData.push(newPost);
         this._state.profilePage.newPostText = '';
         this._callSubscriber(this._state);
      } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
         this._state.profilePage.newPostText = action.newText;
         this._callSubscriber(this._state);
      }
   },
   
};

 export default store;


 //profilePage - обслуживает одну страницу, messagePage - другую