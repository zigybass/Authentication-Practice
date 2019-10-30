import React from "react";

function Login() {
  return (
    <div className="container">
      <form class="col s6">
        <div className="row">
          <div class="input-field col s5">
            <input
              placeholder="Username"
              id="first_name"
              type="text"
              class="validate"
            />
            <label for="first_name"></label>
          </div>
        </div>
        <div className="row">
          <div class="input-field col s5">
            <input
              placeholder="Password"
              id="first_name"
              type="text"
              class="validate"
            />
            <label for="first_name"></label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
