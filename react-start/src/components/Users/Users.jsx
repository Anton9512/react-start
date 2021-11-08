import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../images/user.png'

class Users extends React.Component {

   constructor(props) {
      super(props);
         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
         });
   };
   render() {
      return <div> 
     {
         this.props.users.map( (u) => <div key={u.id}>
             <div className={styles.firstBlock}>
                <div><img src={u.photos.small || userPhoto} className={styles.userPhoto} alt="" /></div>
                <div>
                   {u.followed 
                   ? <button onClick={ () => {this.props.unfollow(u.id)}}>Follow</button> 
                   : <button onClick={ () => {this.props.follow(u.id)}}>Unfollow</button>}
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
    </div>
   }
}

export default Users;