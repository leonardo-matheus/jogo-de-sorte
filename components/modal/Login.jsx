// components/modal/Login.jsx
"use client";

import { useState } from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import Social from "../social/Social";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://ttkrckj-app.apms.io/api/v2/register/', {
        Login: email,
        Password: password,
      });

      if (response.status === 200) {
        console.log('Login bem-sucedido:', response.data);
        // Faça algo com a resposta de sucesso
      } else {
        console.error('Erro de login:', response.data);
        // Lide com o erro de login
      }
    } catch (err) {
      console.error('Erro de servidor:', err);
    }
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="1"
      role="dialog"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-body">
            <div className="account-form-area">
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Fechar"
              >
                <i className="las la-times"></i>
              </button>
              <h3 className="title">Bem-vindo de volta</h3>
              <div className="account-form-wrapper">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      Email <sup>*</sup>
                    </label>
                    <input
                      type="email"
                      name="login_name"
                      id="login_name"
                      placeholder="Digite seu e-mail"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Senha <sup>*</sup>
                    </label>
                    <input
                      type="password"
                      name="login_pass"
                      id="login_pass"
                      placeholder="Senha"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="d-flex flex-wrap justify-content-between mt-2">
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        name="id-1"
                        id="id-1"
                        defaultChecked
                      />
                      <label htmlFor="id-1">Lembrar senha</label>
                      <span className="checkbox"></span>
                    </div>
                    <a href="#0" className="link">
                      Esqueceu a senha?
                    </a>
                  </div>
                  <div className="form-group text-center mt-5">
                    <button className="cmn-btn1" type="submit">Entrar</button>
                  </div>
                </form>
                <p className="text-center mt-4">
                  Não tem uma conta?{" "}
                  <a href="#0" data-bs-toggle="modal" data-bs-target="#signupModal">
                    {" "}
                    Cadastre-se agora
                  </a>
                </p>
                <div className="divider">
                  <span>ou</span>
                </div>
                <Social
                  items={[
                    [FaFacebookF, "/"],
                    [FaTwitter, "/"],
                    [FaGooglePlusG, "/"],
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
