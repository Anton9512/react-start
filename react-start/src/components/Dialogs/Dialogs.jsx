import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';

class Dialogs extends React.Component {
   constructor(props){
      super(props)
   };
   render() {
   
   let state = this.props.dialogsPage;

   let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
   let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>);
   let newMessageBody = state.newMessageBody;

   let onSendMessageClick = () => {
      this.props.sendMessage();
   };

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      this.props.updateNewMessageBody(body)
   };
   if (!this.props.isAuth) {
      return <Redirect to={'/login'}/>
   };

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
}

export default Dialogs;