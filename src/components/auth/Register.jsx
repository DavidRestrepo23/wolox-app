import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import HeaderAuth from "./HeaderAuth";
import Select from "react-select";

const Register = (props) => {
  if (props.validateForm) {
    console.log(props.validateForm);
  }

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
                  <input
                    type="text"
                    placeholder="Nombre"
                    name="name"
                    onChange={props.handleOnChangeForm}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  <input
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                    onChange={props.handleOnChangeForm}
                  />
                </label>
              </div>
              <div>
                <Select
                  options={props.countries}
                  onChange={props.handleOnChangeSelect}
                />
              </div>
              <div>
                <label htmlFor="">
                  <input
                    type="email"
                    placeholder="Correo"
                    name="email"
                    onChange={props.handleOnChangeForm}
                  />
                </label>
              </div>
              <div>
                <label htmlFor="">
                  <input
                    type="number"
                    placeholder="Número de contacto"
                    name="phone"
                    onChange={props.handleOnChangeForm}
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
                      onChange={props.handleOnChangeForm}
                    />
                  </label>
                </div>
                <div>
                  <label htmlFor="">
                    <input
                      type="password"
                      placeholder="Repetir contraseña"
                      name="repeatPassword"
                      onChange={props.handleOnChangeForm}
                    />
                  </label>
                </div>
              </div>
              <div className="action-content">
                <div>
                  <button
                    type="button"
                    className="btn-submit"
                    onClick={props.handleOnSubmitForm}
                  >
                    Registrarse
                  </button>
                </div>
                <div>
                  <Link to="/login">ó inicia sesión</Link>
                </div>
              </div>
              <br />
              <div>
                <span className="error-msg">{props.validateForm && props.validateForm.msg}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Register;
