import axios from "axios";
import { CREATE_USER } from "./actionTypes";

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
          headers: { "Content-Type": "application/json" },
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
