import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface AuthRouteProps {
  children: React.ReactNode;
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children }) => {
  const { user } = useAuth();

  // ✅ If no user is logged in → redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // ✅ Otherwise render the protected component
  return <>{children}</>;
};

export default AuthRoute;
