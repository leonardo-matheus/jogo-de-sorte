import { FaFacebookF, FaGooglePlusG, FaTwitter } from "react-icons/fa";
import Social from "../social/Social";

const SignUp = () => {
  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="2"
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
              <h3 className="title">Abrir Conta Gratuita</h3>
              <div className="account-form-wrapper">
                <form>
                  <div className="form-group">
                    <label>
                      Email <sup>*</sup>
                    </label>
                    <input
                      type="email"
                      name="signup_name"
                      id="signup_name"
                      placeholder="Digite seu Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Senha <sup>*</sup>
                    </label>
                    <input
                      type="password"
                      name="signup_pass"
                      id="signup_pass"
                      placeholder="Senha"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>
                      Confirmar Senha <sup>*</sup>
                    </label>
                    <input
                      type="password"
                      name="signup_re-pass"
                      id="signup_re-pass"
                      placeholder="Confirmar Senha"
                      required
                    />
                  </div>
                  <div className="d-flex flex-wrap mt-2">
                    <div className="custom-checkbox">
                      <input
                        type="checkbox"
                        name="id-2"
                        id="id-2"
                        defaultChecked
                      />
                      <label htmlFor="id-2">Eu concordo com os</label>
                      <span className="checkbox"></span>
                    </div>
                    <a href="#0" className="link ml-1">
                      Termos, Política de Privacidade e Taxas
                    </a>
                  </div>
                  <div className="form-group text-center mt-5">
                    <button className="cmn-btn">Entrar</button>
                  </div>
                </form>
                <p className="text-center mt-4">
                  Já tem uma conta?{" "}
                  <a
                    href="#0"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Entrar
                  </a>
                </p>
                <div className="divider">
                  <span>ou</span>
                </div>

                {/* links sociais aqui */}
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

export default SignUp;
