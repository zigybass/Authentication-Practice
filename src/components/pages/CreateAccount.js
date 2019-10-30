import React from "react";

function CreateAccount () {
    return (
        <div className="container">
      <form className="col s6">
        <div className="row">
          <div className="input-field col s5">
            <input
              placeholder="Username"
              id="first_name"
              type="text"
              className="validate"
            />
            <label for="first_name"></label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s5">
            <input
              placeholder="Password"
              id="first_name"
              type="text"
              className="validate"
            />
            <label for="first_name"></label>
          </div>
        </div>
      </form>
    </div>
    )
}

export default CreateAccount;