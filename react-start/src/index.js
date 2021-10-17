import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let postData = [
  {id: 1, message: 'This is react.js', likesCount: 12},
  {id: 2, message: 'Hello, how are you?', likesCount: 5},
  {id: 3, message: 'Welcome', likesCount: 14},
]

let dialogsData = [
  {id: 1, name: 'Anton',},
  {id: 2, name: 'Vasiliy',},
  {id: 3, name: 'Jenya',},
  {id: 4, name: 'Petr',},
  {id: 5, name: 'Katya',},
  {id: 6, name: 'Sasha',},
]

let messages = [
  {id: 1, message: 'Hi!',},
  {id: 2, message: 'How are you?',},
  {id: 3, message: 'Hello!Would you like to buy our react courses?',},
  {id: 4, message: 'Hello!!'},
  {id: 5, message: 'LOL!',},
  {id: 6, message: 'Bye.',},
]

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData} dialogsData={dialogsData} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
