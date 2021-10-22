import { rerenderEntireTree } from "../render";



 let state = {
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
 };

 window.state = state;

 export let addPost = () => {
   let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likesCount: 0
   }

   state.profilePage.postData.push(newPost);
   state.profilePage.newPostText = '';
   rerenderEntireTree(state);
 };


 export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText;
   rerenderEntireTree(state);
 };

 export default state;


 //profilePage - обслуживает одну страницу, messagePage - другую