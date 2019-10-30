import React from "react";
import { Link } from "react-router-dom";

function Splash () {
    return (
        <div className="container">
            <h2>Splash Page</h2>
            <Link to="/login">
            <button className="waves-effect waves-light btn">Login</button>
            </Link>
            <Link to="/createAccount">
            <button className="waves-effect waves-light btn">Create Account</button>
            </Link>
        </div>
    )
}

export default Splash;