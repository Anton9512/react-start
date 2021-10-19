import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
   let dialogsElements = props.state.dialogsData
   .map( (d) => {
      return <DialogItem name={d.name} id={d.id}/>
   }); 

   let messagesElements = props.state.messages
   .map( (m) => {
      return <Message message={m.message}/>
   });


   let newMessageElement = React.createRef();

   let addMessage = () => {
      let textMessage = newMessageElement.current.value;
      alert(textMessage)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
         <div className={s.entermessage}>
            <textarea ref={newMessageElement} cols="30" rows="10"></textarea>
            <div>
               <button onClick={ addMessage }>Send message</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;