import withRoleGuard from "../utils/withRoleGuard";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../pages/AdminPanel";
import UserProfile from "../pages/UserProfile";

// Wrap components with role-based protection
export const ProtectedDashboard = withRoleGuard(Dashboard, ["admin"]);
export const ProtectedAdminPanel = withRoleGuard(AdminPanel, ["admin"]);
export const ProtectedUserProfile = withRoleGuard(UserProfile, ["user", "admin"]);

// Export all from a single place
export default {
  ProtectedDashboard,
  ProtectedAdminPanel,
  ProtectedUserProfile,
};
