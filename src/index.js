import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="anas-abu-ghalieha.us.auth0.com"
    clientId="Tet39XQ2u6wtXit0L5At7YbFqNCLiEx2"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);