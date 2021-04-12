import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CountryReducer from "./reducers/CountryReducer";
import AuthReducer from "./reducers/AuthReducer";

const rootReducer = combineReducers({
  CountryReducer,
  AuthReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
