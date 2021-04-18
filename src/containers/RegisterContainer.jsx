import axios from "axios";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Register from "../components/auth/Register";
import { getAllCountries } from "../redux/actions/countries/actions";
import { createUser, getUserAuth } from "../redux/actions/auth/actions";

const RegisterContainer = (props) => {
  /**
   * Data Form Register
   */
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
    country: "",
    province: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });
  /**
   *
   */
  const [validateForm, setValidateForm] = useState(undefined);

  /**
   * Dispatch getAllCountries
   */
  useEffect(() => {
    props.getAllCountries();
    props.getUserAuth();

    if (props.auth) {
      props.history.push("/pokemons");
    }
  }, [props.getAllCountries, props.auth, props.history, props.getUserAuth]);

  /**
   *
   * @param {*} e
   */
  const handleOnChangeForm = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  /**
   *
   * @param {*} e
   */
  const handleOnChangeSelect = ({ value }) => {
    const capital = props.countries.find((item) => item.value === value)
      .capital;
    setDataForm({ ...dataForm, country: value, province: capital });
  };

  /**
   *
   */
  const handleOnSubmitForm = (e) => {
    e.preventDefault();
    const result = validationForm(dataForm);

    if (result !== true) {
      props.createUser(dataForm);
    }
  };

  /**
   * Validation form
   * @param {*} data
   */
  const validationForm = (data) => {
    const {
      name,
      lastName,
      email,
      country,
      phone,
      password,
      repeatPassword,
    } = data;

    if (
      name.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      country.trim() === "" ||
      phone.trim() === "" ||
      password.trim() === "" ||
      repeatPassword.trim() === ""
    ) {
      setValidateForm({ status: true, msg: "Hay campos vacios" });
      return true;
    }

    if (password !== repeatPassword) {
      setValidateForm({ status: true, msg: "las contraseñas no coinciden" });
      return true;
    }
  };

  return (
    <Register
      countries={props.countries}
      validateForm={validateForm}
      handleOnChangeForm={handleOnChangeForm}
      handleOnChangeSelect={handleOnChangeSelect}
      handleOnSubmitForm={handleOnSubmitForm}
    />
  );
};

/**
 *
 * @param {*} state
 * @returns
 */
const mapStateToProps = (state) => {
  return {
    countries: state.CountryReducer.countries,
    auth: state.AuthReducer.auth,
  };
};

/**
 * Dispatch Action Country
 */
const mapDispatchToProps = {
  getAllCountries,
  createUser,
  getUserAuth,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);
