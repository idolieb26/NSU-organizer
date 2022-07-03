import React from "react";
import Button from "./Button/Button";
import "./Login.css"

function Login() {
    return (
        <div className="login">
            <Button text={"Login with Google"}/>
        </div>
    );
}

export default Login;