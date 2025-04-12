const ENDPOINTS = {
  AUTH: {
    LOGIN: "/user_auth/api/v1/create-superadmin/",
    LOGOUT: "/user_auth/api/v1/User/logout/",
    SEND_OTP: "/user_auth/api/v1/User/send-otp-email/",
    VERIFY_OTP: "/user_auth/api/v1/User/verify-email/",
    FORGOT_PASSWORD: "/user_auth/api/v1/User/forgot-password/",
    RESET_PASSWORD: (token) => `/user_auth/api/v1/User/change-password/${token}`,
  },
}

export default ENDPOINTS;
