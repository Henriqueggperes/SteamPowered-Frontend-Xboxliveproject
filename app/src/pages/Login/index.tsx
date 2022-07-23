import Header from "components/Header";
import "./style.css";
import pc from "./../../assets/img/pc.png";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { loginRegisterService } from "../../services/authRegisterService";

interface userLoginObj {
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [invalid, setInvalid] = useState<Boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values: userLoginObj) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const response = await loginRegisterService.login(values);
    const jwt = response.data.token;
     if (jwt) {
      localStorage.setItem("jwt", jwt);
      navigate("/profiles");
    }
  };

  return (
    <>
      <Header></Header>
      <section className="auth-container">
        <section className="auth_form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h1 className="login_form-title">INICIAR SESSÃO</h1>
            <div className="input-container">
              <label htmlFor="email">E-mail do usuario steam</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                required
                className="login-input"
              ></input>
            </div>
            <div className="input-container">
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                required
                className="login-input"
              ></input>
              {invalid ? (
                <span className="invalid_credencials-span">
                  Credenciais inválidas
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="form_button-container">
              <button>Iniciar sessão</button>
            </div>
          </form>
        </section>
        <section className="side_info_register-container">
          <div className="register_card-container">
            <span>
              Cadastre-se no Steam e descubra milhares de jogos para jogar
            </span>
            <img src={pc} className="pc-img" />
            <span>
              É <b>gratuito</b> e <b>fácil de usar</b>
            </span>
            <div className="register_button-container">
              <Link to={"/register"} className="link-connection">
                <button className="register-button">Cadastre-se</button>
              </Link>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Login;
