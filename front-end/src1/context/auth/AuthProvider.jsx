import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = sessionStorage.getItem("usertoken");
    const role = sessionStorage.getItem("userRole");
    const userData = sessionStorage.getItem("user");

    if (token && role) {
      setIsAuthenticated(true);
      setUserRole(role);
      setUser(JSON.parse(userData));
    }
  }, []);

  const login = (token, role, userData) => {
    sessionStorage.setItem("usertoken", token);
    sessionStorage.setItem("userRole", role);
    sessionStorage.setItem("user", JSON.stringify(userData));
    setIsAuthenticated(true);
    setUserRole(role);
    setUser(userData);
  };

  const logout = () => {
    sessionStorage.clear();
    setIsAuthenticated(false);
    setUserRole(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
