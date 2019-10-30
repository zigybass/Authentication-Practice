import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./components/pages/Splash";
import Login from "./components/pages/Login";
import CreateAccount from "./components/pages/CreateAccount";


class App extends React.Component {

  render () {
  return (
    <Router>
      <Route exact path="/" component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/createAccount" component={CreateAccount} />
    </Router>
  )};
}

export default App;
