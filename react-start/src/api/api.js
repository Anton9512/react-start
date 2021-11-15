import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   headers: {"API-KEY": "0929f1a9-72a3-463d-89be-30c73653395c"}
})


export const userAPI = {
   getUsers (currentPage, pageSize) {
      return instance.get(`/users?page=${currentPage}&conunt=${pageSize}`)
         .then (response => {
            return response.data;
         })
   }
};


// export const unfollowUser = (unfollow, u) => {
//    return instance.delete(`follow/${u.id}`)
//    .then(response => {
//       if (response.data.resultCode == 0) {
//          unfollow(u.id)
//       };
//    })
// }

