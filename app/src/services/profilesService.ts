import api from "./api";

const profilesService = {
    getAllProfiles: ()=> api.get('/profile')
    .then((response)=>{
        return response;
    })
    .catch((error)=>{
        console.log("Erro em buscar os perfis",error)
    }),

    getProfileById: (id:any)=> api.get(`profile/${id}`)
    .then((response)=>{
        return response;
    })    
    .catch((error)=>{
        alert(error.response.data.message);
    }),

    patchProfileById: (id:any, values:any)=> api.patch(`profile/${id}`, values)
    .then((response)=>{
        return response;
    })
    .catch((error)=>{
        alert(error.response.data.message)
    }),
    deleteProfileById: (id:any)=>api.delete(`profile/${id}`)
    .then((response)=>{
        return response 
    })
    .catch((error)=>{
        alert(error.response.data.message)
    }),
    postProfile: (profile:{})=>api.post(`profile`,profile)
    .then((response)=>{
        return response
    })
    .catch((error)=>{
        alert(error.response.data.message)
    })
    
}

export {
    profilesService,
}