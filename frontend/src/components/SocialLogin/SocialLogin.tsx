import React, { useContext } from "react";
import "./SocialLogin.scss";
import { ActionContext } from "../../hooks";

function SocialLogin({ type }) {
  const { googleSignIn, facebookSignIn } = useContext(ActionContext);

  return (
    <>
      <div className="login-google-button-container top-margin-set">
        <button
          type="button"
          className="login-google-button"
          onClick={(e) => googleSignIn(type)}
        >
          Connect with Google
        </button>
      </div>
      <div className="login-facebook-button-container top-margin-set">
        <button
          type="button"
          className="login-facebook-button"
          onClick={(e) => facebookSignIn(type)}
        >
          Connect with Facebook
        </button>
      </div>
    </>
  );
}

export default SocialLogin;
