import React from "react";
import styles from './Users.module.css'

let Users = (props) => {
   if (props.users.length === 0) {
      props.setUsers( [
         {id: 1, photoUrl: 'https://migrantcentrspb.ru/wp-content/uploads/2021/03/unnamed-1.jpg', followed: false, fullName: 'Vasiliy', status: 'Hello friends', location: {city: 'Moscow', country: 'Russia'}},
         {id: 2, photoUrl: 'https://migrantcentrspb.ru/wp-content/uploads/2021/03/unnamed-1.jpg', followed: true, fullName: 'Alexander', status: 'Dont worry, be happy!', location: {city: 'Minsk', country: 'Belarus'}},
         {id: 3, photoUrl: 'https://migrantcentrspb.ru/wp-content/uploads/2021/03/unnamed-1.jpg', followed: false, fullName: 'Evgeniy', status: 'Relax', location: {city: 'Kiev', country: 'Ukraine'}},
      ])
   }
   return (
     <div>{props.users.map( u => <div key={u.id}>
        <div className={styles.imageBlock}>
           <img className={styles.userPhoto} src={u.photoUrl} alt="" />
           <div>
              {u.followed 
              ? <button onClick={ () => {props.unfollow(u.id)} } className={styles.btn}>Unfollow</button> 
              : <button onClick={ () => {props.follow(u.id)} }  className={styles.btn}>Follow</button>}
            </div>
        </div>
        <div className={styles.imageBlock}>
           <div>{u.fullname}</div>
           <div>{u.status}</div>
        </div>
        <div>
           <div>{u.location.country}</div>
           <div>{u.location.city}</div>
        </div>
     </div>)}</div>
   )
}

export default Users;