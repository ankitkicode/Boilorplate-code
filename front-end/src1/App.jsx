import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";
import ProtectedDashboard from "../pages/ProtectedDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="/dashboard" element={<ProtectedDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
ProtectedRoutes