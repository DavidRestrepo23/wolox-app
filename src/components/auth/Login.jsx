import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import Layout from "../Layout";
import HeaderAuth from "./HeaderAuth";

const Login = (props) => {
  return (
    <>
      <Layout>
        <HeaderAuth />
        <div className="content form">
          <div className="row">
            <div className="grid-4">
              <form>
                <div>
                  <label htmlFor="">
                    <input
                      type="text"
                      placeholder="Email"
                      name="mail"
                      onChange={props.handleOnchangeForm}
                    />
                  </label>
                </div>
                <div>
                  <div>
                    <label htmlFor="">
                      <input
                        type="password"
                        placeholder="Contraseña"
                        name="password"
                        onChange={props.handleOnchangeForm}
                      />
                    </label>
                  </div>
                </div>
                <div className="action-content">
                  <div>
                    <button
                      type="submit"
                      className="btn-submit"
                      onClick={props.handleOnSubmit}
                    >
                      Iniciar sesión
                    </button>
                  </div>
                  <div>
                    <Link to="/register"> ¿Ya tienes cuenta?</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Login;
