import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"


const DialogItem = (props) => {
   let path = '/dialogs/' + props.id;
   return (
      <div className={s.dialog + ' ' + s.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
};

const Message = (props) => {
   return (
      <div className={s.message}>{props.message}</div>
   )
}

let dialogsData = [
   {id: 1, name: 'Anton',},
   {id: 2, name: 'Vasiliy',},
   {id: 3, name: 'Jenya',},
   {id: 4, name: 'Petr',},
   {id: 5, name: 'Katya',},
   {id: 6, name: 'Sasha',},
]

let messagesData = [
   {id: 1, message: 'Hi!',},
   {id: 2, message: 'How are you?',},
   {id: 3, message: 'Hello!Would you like to buy our react courses?',},
   {id: 4, message: 'Hello!!'},
   {id: 5, message: 'LOL!',},
   {id: 6, message: 'Bye.',},
]

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
         <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
         <DialogItem name={dialogsData[1].name}id={dialogsData[1].id}/>
         <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
         <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
         <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
         <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
         </div>
         <div className={s.messages}>
            <Message message={messagesData[0].message}/>
            <Message message={messagesData[1].message}/>
            <Message message={messagesData[2].message}/>
            <Message message={messagesData[3].message}/>
            <Message message={messagesData[4].message}/>
            <Message message={messagesData[5].message}/>
         </div>
      </div>
   )
}

export default Dialogs;