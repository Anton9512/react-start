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

ReactDOM.render(
  <React.StrictMode>
    <App postData={postData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
