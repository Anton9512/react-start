import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';

class Dialogs extends React.Component {
   constructor(props){
      super(props)
   };
   render() {
   
   let state = this.props.dialogsPage;

   let dialogsElements = state.dialogsData.map((d) => <DialogItem name={d.name} key={d.id} id={d.id} />);
   let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>);
   let newMessageBody = state.newMessageBody;

   let addNewMessage = (values) => {
      this.props.sendMessage(values.newMessageBody);
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
         <AddMessageFormRedux onSubmit={ addNewMessage }/>
      </div>
   )
   }
}

const AddMessageForm = (props) => {
   return  (
      <form onSubmit={ props.handleSubmit } className={s.entermessage}>
         <div>
            <Field component={'textarea'} name={'newMessageBody'} placeholder='Enter your message...' />
         </div>
         <div>
            <button>Send message</button>
         </div>
      </form>)
}

const AddMessageFormRedux = reduxForm({form: 'dialoAddMessageForm'}) (AddMessageForm);

export default Dialogs;