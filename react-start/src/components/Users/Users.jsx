import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from '../../images/user.png';
import styles from './Users.module.css';
import * as axios from 'axios';

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
                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                  props.toggleFollowingProgress(true, u.id)
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
                  headers: {"API-KEY": "5348802f-aed7-4188-aeac-0ef9e78c35db"}
                  })
                  .then(response => {
                     if (response.data.resultCode == 0) {
                        props.unfollow(u.id)
                     };
                     props.toggleFollowingProgress(false, u.id)
                  });
                  }}>Unfollow</button> 
                  : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={ () => {
                     props.toggleFollowingProgress(true, u.id)
                     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                     headers: {"API-KEY": "5348802f-aed7-4188-aeac-0ef9e78c35db"}
                     })
                     .then(response => {
                        if (response.data.resultCode == 0) {
                           props.follow(u.id)
                        };
                        props.toggleFollowingProgress(false, u.id)
                     });
               }}>Follow</button>}
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