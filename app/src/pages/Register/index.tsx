import Header from "components/Header";
import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";
import arrow from "./../../assets/icons/arrow.svg";
import { loginRegisterService } from "services/authRegisterService";

const Register = () => {
  
  interface userRegisterObj {
    userName: string,
    email: string;
    cpf:string,
    password: string;
    confirmPassword:string;
  }

  const [values,setValues] = useState<userRegisterObj>({
    userName: "",
    email: "",
    cpf:"",
    password: "",
    confirmPassword:"",
  });
  
  const navigate = useNavigate();

  const [notMatch,setNotMatch] = useState<Boolean>(false)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
     setValues({
      ...values,
      [event.target.name]: event.target.value
     })
    }
    useEffect(()=>{   
      if(values.password!==values.confirmPassword && values.confirmPassword){
        setNotMatch(true);
      }
      else{
        setNotMatch(false)
      }
 })
  
 const handleSubmit = async (event: React.FormEvent)=>{
   event.preventDefault();
   const response: any = await loginRegisterService.register(values);
   if(response.data.id){
      alert("CADASTRO CONCLUIDO, efetue o login para acessar sua conta");
      navigate('/');
   }

 }

  return (
    <>
      <Header></Header>
      <section className="register-container" >
      <Link to={"/"} className="login-link">
        <img src={arrow}/>
      </Link>
        <section className="register_form-container">
          <form onSubmit={handleSubmit} className="register-form">
            <h1 className="register_form-title">CADASTRAR-SE</h1>
            <div className="register_input-container">
              <label htmlFor="userName">Nome</label>
              <input type="text" name="userName" onChange={handleChange} required className="register-input"/>
            </div>
            <div className="register_input-container">
              <label htmlFor="email">E-mail</label>
              <input type="email" name="email" onChange={handleChange} required className="register-input"/>
            </div>
            <div className="register_input-container">
              <label htmlFor="cpf">CPF</label>
              <input type="text" name="cpf" onChange={handleChange} required className="register-input"/>
            </div>
              <label htmlFor="password">Senha</label>
            <div className="register_input-container">
              <input type="password" name="password" onChange={handleChange} required className="register-input"/>
            </div>
            <div className="register_input-container">
              <label htmlFor="confirmPassword">Confirme sua senha</label>
              <input type="password" name="confirmPassword" onChange={handleChange} required className="register-input" />
            </div>
              {notMatch? <span className="not_match-span">*As senhas informadas não conferem*</span>:""}
            <div className="register_form_button-container">
              <button>Iniciar sessão</button>
            </div>
          </form>
        </section>
        <section className="side-container"></section>
      </section>
    </>
  );
};

export default Register;
