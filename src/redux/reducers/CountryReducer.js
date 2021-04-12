const initialState = {
  countries: [],
};

const CountryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_COUNTRIES":
      return {
        ...state,
        countries: action.payload,
      };
    default:
      return state;
  }
};

export default CountryReducer;
