import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0',
   headers: {"API-KEY": "5348802f-aed7-4188-aeac-0ef9e78c35db"}
})


export const userAPI = {
   getUsers (currentPage, pageSize) {
      return instance.get(`/users?page=${currentPage}&conunt=${pageSize}`)
         .then (response => {
            return response.data;
         })
   },
   follow (userId) {
      return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
   },
   unfollow (userId) {
      return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
   },
};




