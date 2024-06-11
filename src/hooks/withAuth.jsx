import React from "react";
import { Navigate } from "react-router-dom";

const withAuth = (Component) => {
  const AuthenticatedComponent = (props) => {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("token="))
      .split("=")[1];
    return token ? <Component {...props} /> : <Navigate to="/login" />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
