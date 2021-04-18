import axios from "axios";
import { CREATE_USER, LOGIN_USER, GET_USER_AUTH } from "./actionTypes";

/**
 *
 * @param {*} data
 * @returns
 */
export const createUser = (data) => {
  const { name, lastName, country, province, email, phone, password } = data;

  return async (dispatch) => {
    await axios
      .post(
        "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/signup",
        {
          name: name,
          last_name: lastName,
          country: country,
          province: province,
          mail: email,
          phone: phone,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers":
              "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
          },
        }
      )
      .then((response) => {
        dispatch({
          type: CREATE_USER,
          payload: {
            name: name,
            lastname: lastName,
            country: country,
            province: province,
            mail: email,
            phone: phone,
            token: response.data.token,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

/**
 *
 * @param {*} data
 * @returns
 */
export const loginUser = (data) => {
  const { mail, password } = data;

  return async (dispatch) => {
    await axios
      .post(
        "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login",
        { mail: mail, password: password },
        {
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "POST",
            "Access-Control-Allow-Headers":
              "x-access-token, Origin, X-Requested-With, Content-Type, Accept",
          },
        }
      )
      .then((response) => {
        return dispatch({
          type: LOGIN_USER,
          payload: response.data.token,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

/**
 *
 */
export const getUserAuth = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      return dispatch({
        type: GET_USER_AUTH,
        payload: true,
      });
    }
  };
};
