const initialState = {
  token: localStorage.getItem("token"),
  auth: null,
  user: {
    name: null,
    lastName: null,
    email: null,
  },
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: action.payload.name,
          lastName: action.payload.lastname,
          email: action.payload.mail,
        })
      );
      return {
        ...state,
        auth: true,
        token: action.payload.token,
        user: {
          name: action.payload.name,
          lastName: action.payload.lastname,
          email: action.payload.mail,
        },
      };
    default:
      return state;
  }
};

export default AuthReducer;
