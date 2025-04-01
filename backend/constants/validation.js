const VALIDATION_MESSAGES = {
    REQUIRED: (field) => `${field} is required.`,
    INVALID_EMAIL: "Invalid email format.",
    PASSWORD_TOO_SHORT: "Password must be at least 6 characters.",
    PASSWORD_WEAK: "Password must contain at least one uppercase letter, one number, and one special character.",
    INVALID_PHONE: "Invalid phone number format.",
  };
  
  module.exports = VALIDATION_MESSAGES;
  