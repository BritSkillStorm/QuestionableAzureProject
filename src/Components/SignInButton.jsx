import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../authConfig";

import Button from "react-bootstrap/Button";

const handleLogin = (instance) => {
  instance.loginPopup(loginRequest).catch((e) => {
    console.error(e);
  });
};

export const SignInButton = () => {
  const { instance } = useMsal();
  return (
    <Button
      variant="secondary"
      className="ml-auto"
      onClick={() => handleLogin(instance)}
    >
      Sign in using Popup
    </Button>
  );
};

export default SignInButton;
