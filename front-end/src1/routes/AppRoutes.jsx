import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Unauthorized from "../pages/Unauthorized";
import {
  ProtectedDashboard,
  ProtectedAdminPanel,
  ProtectedUserProfile,
} from "./ProtectedRoutes";

const AppRoutes = () => (
  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="/dashboard" element={<ProtectedDashboard />} />
    <Route path="/admin-panel" element={<ProtectedAdminPanel />} />
    <Route path="/profile" element={<ProtectedUserProfile />} />
  </Routes>
);

export default AppRoutes;
