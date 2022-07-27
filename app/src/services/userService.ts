import api from "./api";

interface userObj {
    id: string;
    userName: string;
    email: string;
  }

const userService = {
  getAllUsers: () => api.get("user")
    .then((response) => {
      return response;
    })
    .catch((error)=>{
        alert(error.response.data.message)
    }),

   patchUserById: (id:string,values:userObj)=> api.patch(`user/${id}`,values)
   .then((response)=>{
    return response
   })
   .catch((error)=>{
     alert(error.response.data.message);
   }),

   deleteUserById: (id:string)=> api.delete(`user/${id}`)
   .then((response)=>{
    return response
   })
   .catch((error)=>{
     alert(error.response.data.message);
   }),


};

export default userService
