const API_ENDPOINTS = {
    AUTH: {
      LOGIN: "/api/auth/login",
      REGISTER: "/api/auth/register",
      LOGOUT: "/api/auth/logout"
    },
    USER: {
      GET_PROFILE: "/api/user/profile",
      UPDATE_PROFILE: "/api/user/update"
    },
    ADMIN: {
      GET_USERS: "/api/admin/users",
      DELETE_USER: "/api/admin/user/delete"
    }
  };
  
  module.exports = API_ENDPOINTS;
  