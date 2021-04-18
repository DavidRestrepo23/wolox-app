import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Login from "../components/auth/Login";
import { loginUser, getUserAuth } from "../redux/actions/auth/actions";

const LoginContainer = (props) => {
  const [dataForm, setDataForm] = useState({
    mail: null,
    password: null,
  });

  useEffect(() => {

    props.getUserAuth();

    if (props.auth) {
      props.history.push("/pokemons");
    }
    
  }, [props.auth, props.history, props.getUserAuth]);

  const [validatenForm, setValidateForm] = useState(undefined);

  /**
   *
   * @param {*} e
   */
  const handleOnchangeForm = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  /**
   *
   * @param {*} e
   */
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const result = validationForm(dataForm);
    if (result !== true) {
      props.loginUser(dataForm);
    }
  };

  /**
   * Validation form
   * @param {*} data
   */
  const validationForm = (data) => {
    const { mail, password } = data;

    if (mail.trim() === "" || password.trim() === "") {
      setValidateForm({ status: true, msg: "Hay campos vacios" });
      return true;
    }
  };

  return (
    <Login
      handleOnSubmit={handleOnSubmit}
      handleOnchangeForm={handleOnchangeForm}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.AuthReducer.auth,
  };
};

const mapDispatchToProps = {
  loginUser,
  getUserAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
