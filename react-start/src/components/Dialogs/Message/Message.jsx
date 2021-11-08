import React from 'react';
import s from './../Dialogs.module.css';

class Message extends React.Component {
   constructor(props) {
      super(props)
   };
   render() {
      return (
         <div>
            <div className={s.message}>{this.props.message}</div>
         </div>
      )
   }
};


// const Message = (props) => {
//    return (
//       <div>
//          <div className={s.message}>{props.message}</div>
//       </div>
//    )
// };


export default Message;