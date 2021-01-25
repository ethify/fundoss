import React, { useContext } from "react";
import "./Login.scss";
import { ActionContext } from "../../hooks";

function Login() {
  const { githubSignIn } = useContext(ActionContext);
  return (
    <div className="login">
      <h2 className="login-header">Connect with FundOss</h2>
      <div className="login-google-button-container top-margin-set">
        <button
          type="button"
          className="login-google-button"
          onClick={(e) => githubSignIn()}
        >
          Connect with Github
        </button>
      </div>
    </div>
  );
}

export default Login;
