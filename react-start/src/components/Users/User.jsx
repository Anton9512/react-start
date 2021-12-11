import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../images/user.png';
import styles from './Users.module.css';


let User = ({user, followingInProgress, unfollow, follow, }) => {
   return (<div>
          <div className={styles.firstBlock}>
             <div>
                <NavLink to={'/profile/' + user.id}>
                  <img src={user.photos.small || userPhoto} className={styles.userPhoto} alt="" />
                </NavLink>
             </div>
             <div>
                {user.followed
                ? <button disabled={followingInProgress
                  .some(id => id === user.id)} onClick={ () => {unfollow(user.id)}
               }>Unfollow</button> 
                  : <button disabled={followingInProgress
                     .some(id => id === user.id)} onClick={ () => {follow(user.id)}
                     }>Follow</button>}
             </div>
          </div>
          <div className={styles.secondBlock}>
             <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
             </div>
             <div>
                <div>{'user.location.country'}</div>
                <div>{'user.location.city'}</div>
             </div>
          </div>
       </div>
    )}



export default User;