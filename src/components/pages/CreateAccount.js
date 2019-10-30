import React from "react";

class CreateAccount extends React.Component {
  state = {
    firstName: "",
    password: "",
    confirmPassword: "",
    username: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
      e.preventDefault();
      const newUser = {
          firstName: this.state.firstName,
          username: this.state.username,
          password: this.state.password
      }
  }

  render() {
    return (
      <div className="container">
        <h3>Create a new account</h3>
        <form className="col s6">
          <div className="row">
            <div className="input-field col s5">
              <input
                value={this.state.firstName}
                name="firstName"
                placeholder=""
                id="first_name"
                type="text"
                className="validate"
                onChange={this.onChange}
              />
              <label for="first_name">First Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5">
              <input
                value={this.state.username}
                name="username"
                placeholder=""
                id="first_name"
                type="text"
                className="validate"
                onChange={this.onChange}
              />
              <label for="first_name">Username</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5">
              <input
                value={this.state.password}
                name="password"
                placeholder=""
                id="first_name"
                type="text"
                className="validate"
                onChange={this.onChange}
              />
              <label for="first_name">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s5">
              <input
                value={this.state.confirmPassword}
                name="confirmPassword"
                placeholder=""
                id="first_name"
                type="text"
                className="validate"
                onChange={this.onChange}
              />
              <label for="first_name">Re-enter Password</label>
            </div>
          </div>
          <button
            className="btn waves-effect blue waves-light"
            type="submit"
            name="action"
            onClick={this.onSubmit}
          >
            Submit
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default CreateAccount;
