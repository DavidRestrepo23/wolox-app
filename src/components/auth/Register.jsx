import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import HeaderAuth from "./HeaderAuth";
import Select from "react-select";
import Layout from "../Layout";

const Register = (props) => {
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
                      placeholder="Nombre"
                      name="name"
                      onChange={props.handleOnChangeForm}
                    />
                    {props.errorForm.name && <h2 className="err">{props.errorForm.name}</h2>}
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
                    {props.errorForm.lastName && (
                      <h2 className="err">{props.errorForm.lastName}</h2>
                    )}
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
                    {props.errorForm.email && <h2 className="err">{props.errorForm.email}</h2>}
                  </label>
                </div>
                <div>
                  <label htmlFor="">
                    <input
                      type="text"
                      placeholder="Número de contacto"
                      name="phone"
                      onChange={props.handleOnChangeForm}
                    />
                    {props.errorForm.phone && <h2 className="err">{props.errorForm.phone}</h2>}
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
                      {props.errorForm.password && (
                        <h2 className="err">{props.errorForm.password}</h2>
                      )}
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
                      {props.errorForm.repeatPassword && (
                        <h2 className="err">{props.errorForm.repeatPassword}</h2>
                      )}
                    </label>
                  </div>
                  <div>
                    <label htmlFor="" className="terms">
                      <input
                        type="checkbox"
                      />
                      <Link to="/">Términos y condiciones</Link>
                    </label>
                  </div>
                </div>
                <br />
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
                  <span className="error-msg">
                    {props.validateForm && props.validateForm.msg}
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <br />
        <br />
      </Layout>
    </>
  );
};

export default Register;
