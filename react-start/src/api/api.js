import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {"API-KEY": "5348802f-aed7-4188-aeac-0ef9e78c35db"}
})


export const userAPI = {
   getUsers (currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&conunt=${pageSize}`)
         .then (response => {
            return response.data;
         })
   },
   follow (userId) {
      return instance.post(`follow/${userId}`)
   },
   unfollow (userId) {
      return instance.delete(`follow/${userId}`)
   },
   getProfile (userId) {
         // Obsolete method. Please, use profileAPI obj.
      return profileAPI.getProfile(userId);   
   },
};
export const profileAPI = {
   getProfile (userId) {
      return instance.get(`profile/` + userId);   
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId);  
   },
   updateStatus(status) {
      return instance.put(`profile/status/`, { status: status });  
   },
};

export const authAPI = {
   me () {
      return instance.get(`auth/me`)
   }
};




