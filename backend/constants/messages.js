const MESSAGES = {
    SUCCESS: {
      GENERAL: "The operation was successful.",
      CREATED: "The resource was successfully created.",
      UPDATED: "The resource was successfully updated.",
      DELETED: "The resource was successfully deleted.",
      EMAIL: "Email sent successfully",
      COOKIE:"logout successfull",
      PLAN_CANCEL:"Subscription cancelled successfully",
      LOGIN: "Login successful.",
      REGISTER: "Registration successful.",
      LOGOUT: "Logout successful.",
    },
    ERROR: {
      NOT_FOUND: "Requested resource not found.",
      INTERNAL_SERVER_ERROR: "Internal server error. Please try again later.",
      VALIDATION_ERROR: "Invalid input data.",
      UNAUTHORIZED: "Unauthorized access.",
      FORBIDDEN: "You do not have permission to perform this action.",
      DUPLICATE_ENTRY: "Duplicate entry found.",
      DATA_NOT_FOUND: "No data found.",
      LOGIN_FAILED: "Invalid credentials, login failed.",
      REGISTER_FAILED: "Registration failed.",
      LOGOUT_FAILED: "Logout failed.",
    },
    VALIDATION: {
      REQUIRED_FIELD: "This field is required!",
      INVALID_EMAIL: "Please provide a valid email address!",
      PASSWORD_MIN_LENGTH: "Password must be at least 8 characters long!",
      PASSWORD_COMPLEXITY: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character!",
      INVALID_ID: "The provided ID is invalid.",
      BODY:"please provide all fields in body!",
      INVALID_PASSWORD:"invalid credential!",
      TOKEN_NOT_FOUND:"No token provided",
      EXPIRED_TOKEN:"Invalid or expired refresh token",
      VERIFY_EMAIL:"Please verify your email before proceeding.",
      PARAMS:"Provide id in params",
      SUPER_ADMIN:"SuperAdmin user not found",
      PLAN_CANCEL:"No active subscription found",
  }
  };
  
  module.exports = MESSAGES;