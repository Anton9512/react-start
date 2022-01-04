import React from "react";
import { NavLink } from "react-router-dom";
import userPhotos from '../../images/user.png';
import styles from './Users.module.css';


let User = ({user, followingInProgress, unfollow, follow, }) => {
   return (<div>
          <div className={styles.userInfoBlock}>
              <div>
                  <div>{user.name}</div>
              </div>
             <div>
                <NavLink to={'/profile/' + user.id}>
                  <img src={user.photos.small || userPhotos} className={styles.userPhotos} alt="" />
                </NavLink>
             </div>
             <div>
                {user.followed
                ? <button className={styles.unfollow} disabled={followingInProgress
                  .some(id => id === user.id)} onClick={ () => {unfollow(user.id)}
               }>Unfollow</button> 
                  : <button className={styles.follow} disabled={followingInProgress
                     .some(id => id === user.id)} onClick={ () => {follow(user.id)}
                     }>Follow</button>}
             </div>
          </div>
          <div>
          </div>
       </div>
    )}



export default User;