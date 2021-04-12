import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Landing from "./components/Landing";
import RegisterContainer from "./containers/RegisterContainer";


const App = () => {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={Landing} />
       <Route exact path="/login" component={Login}/>
       <Route exact path="/register" component={RegisterContainer}/>
     </Switch>
   </Router>
  );
};

export default App;
