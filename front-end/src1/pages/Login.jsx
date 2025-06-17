import React from "react";
import useAuth from "../context/auth/useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    // Mock data
    const token = "mockToken";
    const role = "admin";
    const userData = { name: "John Doe", email: "john@example.com" };

    login(token, role, userData);
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
};

export default Login;
