import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CountryReducer from "./reducers/CountryReducer";
import AuthReducer from "./reducers/AuthReducer";
import PokemonReducer from "./reducers/PokemonReducer";

const rootReducer = combineReducers({
  CountryReducer,
  AuthReducer,
  PokemonReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
