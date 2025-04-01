const MESSAGES = {
    SUCCESS: {
      DATA_RETRIEVED: "Data retrieved successfully.",
      DATA_SAVED: "Data saved successfully.",
      DATA_UPDATED: "Data updated successfully.",
      DATA_DELETED: "Data deleted successfully.",
      LOGIN_SUCCESS: "Login successful.",
      LOGOUT_SUCCESS: "Logout successful.",
      ACCOUNT_CREATED: "Account created successfully.",
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
    }
  };
  
  module.exports = MESSAGES;
  