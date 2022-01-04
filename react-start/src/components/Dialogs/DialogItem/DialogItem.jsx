import React from 'react';
import s from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";


function DialogItem(props) {

   let path = '/dialogs/' + props.id;
   return (
       <div className={s.dialogsItem}>
          <NavLink className={s.active} to={path}>{props.name}:</NavLink>
       </div>
   )
};

export default DialogItem;