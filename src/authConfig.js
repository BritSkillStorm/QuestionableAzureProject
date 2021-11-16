export const msalConfig = {
  auth: {
    clientId: "38316349-38fa-4108-a540-b1432cb91b01",
    redirectUri: "http://localhost:3000",
    authority: "https://login.microsoftonline.com/SkillStorm.onmicrosoft.com",
  },

  // cache: {
  //   cacheLocation: "sessionStorage",
  //   storeAuthStateInCookie: false,
  // },
};

export const loginRequest = {
  scopes: ["User.read"],
};

export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/User.Read/v1.0/me",
};
