import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

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
   
   let dialogsElements = dialogsData
   .map( (d) => {
      return <DialogItem name={d.name} id={d.id}/>
   }); 

   let messagesElements = messages
   .map( (m) => {
      return <Message message={m.message}/>
   });

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
            {dialogsElements}
         </div>
         <div className={s.messages}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs;