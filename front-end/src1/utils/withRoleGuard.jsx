import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../context/auth/useAuth";

const withRoleGuard = (Component, allowedRoles = []) => {
  return function GuardedComponent(props) {
    const { isAuthenticated, userRole } = useAuth();

    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (!allowedRoles.includes(userRole)) return <Navigate to="/unauthorized" replace />;

    return <Component {...props} />;
  };
};

export default withRoleGuard;
