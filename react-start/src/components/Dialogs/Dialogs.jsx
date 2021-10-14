import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom"


const DialogItem = (props) => {
   let path = "/dialogs/" + props.id;

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

const Dialogs = (props) => {
   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItem}>
         <DialogItem name="Anton" id="1"/>
         <DialogItem name="Vasiliy" id="2"/>
         <DialogItem name="Jenya" id="3"/>
         <DialogItem name="Petr" id="4"/>
         <DialogItem name="Katya" id="5"/>
         <DialogItem name="Sasha" id="6"/>
         </div>
         <div className={s.messages}>
            <Message message="Hi!"/>
            <Message message="How are you?"/>
            <Message message="Hello!Would you like to buy our react courses?"/>
            <Message message="Hello!!"/>
            <Message message="LOL!"/>
            <Message message="Bye."/>
         </div>
      </div>
   )
}

export default Dialogs;