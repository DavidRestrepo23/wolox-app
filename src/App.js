import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing";
import PokemonResult from "./components/pokemons/PokemonResult";
import LoginContainer from "./containers/LoginContainer";
import PokemonContainer from "./containers/PokemonContainer";
import RegisterContainer from "./containers/RegisterContainer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={LoginContainer} />
        <Route exact path="/register" component={RegisterContainer} />
        <Route exact path="/pokemons" component={PokemonContainer} />
        <Route exact path="/pokemons/find" component={PokemonResult} />
      </Switch>
    </Router>
  );
};

export default App;
