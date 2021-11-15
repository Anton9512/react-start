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
};




