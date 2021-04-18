import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import PokemonContainer from "./containers/PokemonContainer";
import RegisterContainer from "./containers/RegisterContainer";
import PrivateRoute from "./containers/PrivateRoute";
import LandingContainer from "./containers/LandingContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <PrivateRoute exact path="/pokemons" component={PokemonContainer} />
      </Switch>
    </Router>
  );
};

export default App;
