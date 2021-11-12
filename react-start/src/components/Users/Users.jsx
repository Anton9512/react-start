import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../images/user.png';
import styles from './Users.module.css';

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i=1; i <= pagesCount; i++) {
      if (pages.length <= 49) {
         pages.push(i);
      }
   };

   return (<div> 
      <div className={styles.pageBlock}>
         {pages.map((p) => {
           return  <span className={props.currentPage === p && styles.selectedPage} onClick={ () => {props.onPageChanged(p)}}>{p}</span>
         })}
      </div>
  {
      props.users.map( (u) => <div key={u.id}>
          <div className={styles.firstBlock}>
             <div>
                <NavLink to={'/profile/' + u.id}>
                  <img src={u.photos.small || userPhoto} className={styles.userPhoto} alt="" />
                </NavLink>
             </div>
             <div>
                {u.followed 
                ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
             </div>
          </div>
          <div className={styles.secondBlock}>
             <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
             </div>
             <div>
                <div>{'u.location.country'}</div>
                <div>{'u.location.city'}</div>
             </div>
          </div>
       </div>
    )}
 </div>)
}

export default Users;