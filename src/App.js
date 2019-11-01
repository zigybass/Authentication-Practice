import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Splash from "./components/pages/Splash";
import Login from "./components/pages/Login";
import CreateAccount from "./components/pages/CreateAccount";

class App extends React.Component {
  state = {
    user: []
  };

  addUser = user => {
    this.setState({ user: user });
    console.log(this.state.user);
  };

  render() {
    return (
      <Router>
          <Route exact path="/" component={Splash} />
          <Route path="/login" component={Login} />
          <Route path="/createAccount">
            <CreateAccount createUser={this.addUser} />
          </Route>
      </Router>
    );
  }
}

export default App;
