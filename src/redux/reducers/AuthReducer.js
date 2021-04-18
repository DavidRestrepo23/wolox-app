const initialState = {
  token: localStorage.getItem("token"),
  auth: null,
  user: {
    name: null,
    lastName: null,
    email: null,
  },
  msg: "",
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_USER":
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
        user: {
          name: action.payload.name,
          lastName: action.payload.lastname,
          email: action.payload.mail,
        },
      };
    case "LOGIN_USER":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        auth: true,
        token: action.payload,
      };
    case "GET_USER_AUTH":
      return {
        ...state,
        auth: action.payload,
        msg: action.msg,
      };

    default:
      return state;
  }
};

export default AuthReducer;
