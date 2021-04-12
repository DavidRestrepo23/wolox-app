import axios from "axios";
import { GET_ALL_COUNTRIES } from "./actionTypes";

/**
 * Get all countries from API https://restcountries.eu/
 * @return array
 */
export const getAllCountries = () => {
  return async (dispatch) => {
    await axios
      .get("https://restcountries.eu/rest/v2/all?fields=name;capital;flag")
      .then((response) => {
        const options = [];

        response.data.map((country) => {
          options.push({
            value: country.name,
            label: country.name,
            capital: country.capital,
            flag: country.flag,
          });
        });

        dispatch({
          type: GET_ALL_COUNTRIES,
          payload: options,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
