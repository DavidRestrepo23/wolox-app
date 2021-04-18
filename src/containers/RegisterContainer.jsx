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

  const [errorForm, setErrorForm] = useState({
    name: null,
    lastName: null,
    country: null,
    province: null,
    email: null,
    phone: null,
    password: null,
    repeatPassword: null,
    error: false,
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
    validationInput(e);
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

  const validationInput = (e) => {
    /** Name LastName */
    if (e.target.name === "name" || e.target.name === "lastName") {
      if (e.target.value.length > 30) {
        setErrorForm({
          ...errorForm,
          [e.target.name]: "Solo se permiten 30 caracteres.",
          error: true,
        });
      } else {
        setErrorForm({
          ...errorForm,
          [e.target.name]: null,
          error: false,
        });
      }
    }

    /** Email */
    if (e.target.name === "email") {
      const regx = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        e.target.value
      );

      if (!regx) {
        setErrorForm({
          ...errorForm,
          [e.target.name]: "El correo no tiene el formato correcto",
          error: true,
        });
      } else {
        setErrorForm({
          ...errorForm,
          [e.target.name]: null,
          error: false,
        });
      }
    }
    /** Phone */
    if (e.target.name === "phone") {
      const regx = /^\d+$/.test(e.target.value);
      if (!regx || e.target.value.length > 10) {
        setErrorForm({
          ...errorForm,
          [e.target.name]:
            "Solo se permiten valores númericos y un máximo de 10 números.",
          error: true,
        });
      } else {
        setErrorForm({
          ...errorForm,
          [e.target.name]: null,
          error: false,
        });
      }
    }

    /** Password - repeatPassword */
    if (e.target.name === "password" || e.target.name === "repeatPassword") {
      const regx = /^[a-z0-9]+$/i.test(e.target.value);

      if (!regx || e.target.value.length < 6) {
        setErrorForm({
          ...errorForm,
          [e.target.name]:
            "La contraseña debé ser Alfanúmerica y mayor a 6 caracteres.",
          error: true,
        });
      } else {
        setErrorForm({
          ...errorForm,
          [e.target.name]: null,
          error: false,
        });
      }
    }
  };

  return (
    <Register
      countries={props.countries}
      validateForm={validateForm}
      errorForm={errorForm}
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
