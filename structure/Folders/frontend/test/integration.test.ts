import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthRouteProps {
  isAuth: boolean;
  children: ReactNode;
}

// Destructure props directly in the function signature for clarity and type safety
export default function AuthRoute({ isAuth, children }: AuthRouteProps) {
  if (!isAuth) {
    return React.createElement(Navigate, { to: "/login", replace: true });
  }
  return React.createElement(React.Fragment, null, children);
}