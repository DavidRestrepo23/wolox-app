import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import HeaderAuth from "./HeaderAuth";

const Login = () => {
  return (
    <>
      <Header />
      <HeaderAuth />
      <div className="content form">
        <div className="row">
          <div className="grid-4">
            <form>
              <div>
                <label htmlFor="">
                  <input type="text" placeholder="Nombre" name="name" />
                </label>
              </div>
              <div>
                <div>
                  <label htmlFor="">
                    <input
                      type="password"
                      placeholder="Contraseña"
                      name="password"
                    />
                  </label>
                </div>
              </div>
              <div className="action-content">
                <div>
                  <button type="submit" className="btn-submit">
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
      <Footer />
    </>
  );
};

export default Login;
