import React from "react";
import userPhoto from '../../images/user.png';
import styles from './Users.module.css';

let Users = (props) => {
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

   let pages = [];
   for (let i=1; i <= pagesCount; i++) {
      if (pages.length <= 10) {
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
             <div><img src={u.photos.small || userPhoto} className={styles.userPhoto} alt="" /></div>
             <div>
                {u.followed 
                ? <button onClick={ () => {props.unfollow(u.id)}}>Follow</button> 
                : <button onClick={ () => {props.follow(u.id)}}>Unfollow</button>}
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