import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {
  useIsAuthenticated,
  AuthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <a className="navbar-brand" href="/">
          MSAL React Tutorial
        </a>
        <SignInButton />
        <AuthenticatedTemplate>
          <p>This will only render if a user is signed-in.</p>
          <SignOutButton />
        </AuthenticatedTemplate>
      </Navbar>
      <h5>
        <center>
          Welcome to the Microsoft Authentication Library For React Tutorial
        </center>
      </h5>
      <br />
      <br />
      {props.children}
    </>
  );
};
