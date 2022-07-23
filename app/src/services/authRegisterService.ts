import api from "./api";
interface userLoginObj {
 email:string,
 password:string,
}
interface userRegisterObj{
    userName: string,
    email: string,
    cpf: string,
    password:string,
    confirmPassword: string
}
const loginRegisterService = {
    login: (values:userLoginObj)=> api.post('auth', values)
    .then((response: any)=>{
        return response;
    })
    .catch((error)=> alert(error.response.data.message)),// FAZER RESPOSTA DE ERROS ESTILIZADA

    register: (values: userRegisterObj)=> api.post('user',values)
    .then((response)=> response)
    .catch((error)=> alert(error.response.data.message))

}

export {
    loginRegisterService,
}