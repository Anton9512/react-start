import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../images/user.png'

class Users extends React.Component {
   componentDidMount() {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&conunt=${this.props.pageSize}`).then(response => {
         this.props.setUsers(response.data.items);
         this.props.setTotalUsersCount(response.data.totalCount);
      });
   };

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&conunt=${this.props.pageSize}`)
         .then(response => {
            this.props.setUsers(response.data.items);
      });
   };

   render() {

      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

      let pages = [];
      for (let i=1; i <= pagesCount; i++) {
         pages.push(i);
      };

      return (<div> 
         <div className={styles.pageBlock}>
            {pages.map((p) => {
              return  <span className={this.props.currentPage === p && styles.selectedPage} onClick={ (e) => {this.onPageChanged(p)}}>{p}</span>
            })}
         </div>
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
    </div>)
   }
}

export default Users;