import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} id={d.id} />)
   let messagesElements = state.messages.map((m) => <Message message={m.message} />)
   let newMessageBody = state.newMessageBody

   let onSendMessageClick = () => {
      props.sendMessage();
   }

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body)
      //props.store.dispatch(updateNewMessageBodyCreator(body))
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
            <textarea value={newMessageBody} onChange={onNewMessageChange} placeholder='Enter your message...' cols="30" rows="10"></textarea>
            <div>
               <button onClick={onSendMessageClick}>Send message</button>
            </div>
         </div>
      </div>
   )
}

export default Dialogs;