import React from "react";
import { Navigate, Route } from "react-router-dom";

const ProtectedRoute = ({ element, authenticated, redirectTo, ...rest }) => {
  console.log("ProtectedRoute start executing...");

  if (!authenticated) {
    return <Navigate to={redirectTo} />;
  }

  return <Route {...rest} element={element} />;
};

export default ProtectedRoute;
