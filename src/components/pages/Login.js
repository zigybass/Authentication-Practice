import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <form className="col s6">
          <div className="row">
            <div className="input-field col s5">
              <input
              value={this.state.username}
              name="username"
                placeholder="Username"
                id="first_name"
                type="text"
                className="validate"
                onChange={this.onChange}
              />
              <label for="first_name"></label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5">
              <input
              value={this.state.password}
              name="password"
                placeholder="Password"
                id="first_name"
                type="text"
                className="validate"
                onChange={this.onChange}
              />
              <label for="first_name"></label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
