import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";

function handleLogout(instance, ca) {
  const logoutRequest = {
    account: instance.getAccountByHomeId(ca),
  };
  instance.logoutRedirect({
    account: instance.getAccountByHomeId(ca),
    onRedirectNavigate: () => {
      return false;
    },
  });
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = () => {
  let { instance, accounts } = useMsal();

  let currentAccount;
  if (accounts.length) {
    currentAccount = accounts[0].homeAccountId;
  }

  return (
    <Button
      variant="secondary"
      className="ml-auto"
      onClick={() => handleLogout(instance, currentAccount)}
    >
      Sign out using Popup
    </Button>
  );
};
