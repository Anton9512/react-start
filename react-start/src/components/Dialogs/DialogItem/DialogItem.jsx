import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


class DialogItem extends React.Component {
   constructor(props) {
      super(props);
   };
   render() {
      let path = '/dialogs/' + this.props.id;
      return (
         <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{this.props.name}</NavLink>
         </div>    
      )
   };
};

export default DialogItem;