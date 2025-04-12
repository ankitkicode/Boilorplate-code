// utils/response.js (Enhanced Response Helper)

// Success Response
exports.success = (res, message, data = {}) => {
    res.status(200).json({
      success: true,
      message,
      data,
    });
  };
  
  // Error Response
  exports.error = (res, message, statusCode = 400) => {
    res.status(statusCode).json({
      success: false,
      message,
    });
  };
  
  // Validation Error Response
  exports.validationError = (res, errors) => {
    res.status(422).json({
      success: false,
      message: "Validation Error",
      errors,
    });
  };
  
  // Unauthorized Response
  exports.unauthorized = (res, message = "Unauthorized access") => {
    res.status(401).json({
      success: false,
      message,
    });
  };
  
  // Forbidden Response
  exports.forbidden = (res, message = "Forbidden access") => {
    res.status(403).json({
      success: false,
      message,
    });
  };
  
  // Not Found Response
  exports.notFound = (res, message = "Resource not found") => {
    res.status(404).json({
      success: false,
      message,
    });
  };
  
  // Server Error Response
  exports.serverError = (res, message = "Internal Server Error") => {
    res.status(500).json({
      success: false,
      message,
    });
  };
  
  // Bad Request Response
  exports.badRequest = (res, message = "Bad Request") => {
    res.status(400).json({
      success: false,
      message,
    });
  };
  
  // Conflict Response
  exports.conflict = (res, message = "Conflict") => {
    res.status(409).json({
      success: false,
      message,
    });
  };
  
  // Gone Response
  exports.gone = (res, message = "Gone") => {
    res.status(410).json({
      success: false,
      message,
    });
  };
  
  // Length Required Response
  exports.lengthRequired = (res, message = "Length Required") => {
    res.status(411).json({
      success: false,
      message,
    });
  };
  
  // Precondition Failed Response
  exports.preconditionFailed = (res, message = "Precondition Failed") => {
    res.status(412).json({
      success: false,
      message,
    });
  };
  
  // Payload Too Large Response
  exports.payloadTooLarge = (res, message = "Payload Too Large") => {
    res.status(413).json({
      success: false,
      message,
    });
  };
  
  // URI Too Long Response
  exports.uriTooLong = (res, message = "URI Too Long") => {
    res.status(414).json({
      success: false,
      message,
    });
  };
  
  // Unsupported Media Type Response
  exports.unsupportedMediaType = (res, message = "Unsupported Media Type") => {
    res.status(415).json({
      success: false,
      message,
    });
  };
  
  // Range Not Satisfiable Response
  exports.rangeNotSatisfiable = (res, message = "Range Not Satisfiable") => {
    res.status(416).json({
      success: false,
      message,
    });
  };
  
  // Expectation Failed Response
  exports.expectationFailed = (res, message = "Expectation Failed") => {
    res.status(417).json({
      success: false,
      message,
    });
  };
  
  // I'm a Teapot Response
  exports.imATeapot = (res, message = "I'm a Teapot") => {
    res.status(418).json({
      success: false,
      message,
    });
  };
  
  // Unprocessable Entity Response
  exports.unprocessableEntity = (res, message = "Unprocessable Entity") => {
    res.status(422).json({
      success: false,
      message,
    });
  };
  
  // Locked Response
  exports.locked = (res, message = "Locked") => {
    res.status(423).json({
      success: false,
      message,
    });
  };
  
  // Failed Dependency Response
  exports.failedDependency = (res, message = "Failed Dependency") => {
    res.status(424).json({
      success: false,
      message,
    });
  };
  
  // Unordered Collection Response
  exports.unorderedCollection = (res, message = "Unordered Collection") => {
    res.status(425).json({
      success: false,
      message,
    });
  };
  
  // Upgrade Required Response
  exports.upgradeRequired = (res, message = "Upgrade Required") => {
    res.status(426).json({
      success: false,
      message,
    });
  };
  
  // Precondition Required Response
  exports.preconditionRequired = (res, message = "Precondition Required") => {
    res.status(428).json({
      success: false,
      message,
    });
  };
  
  // Too Many Requests Response
  exports.tooManyRequests = (res, message = "Too Many Requests") => {
    res.status(429).json({
      success: false,
      message,
    });
  };
  
  // Request Header Fields Too Large Response
  exports.requestHeaderFieldsTooLarge = (res, message = "Request Header Fields Too Large") => {
    res.status(431).json({
      success: false,
      message,
    });
  };
  
  // Unavailable For Legal Reasons Response
  exports.unavailableForLegalReasons = (res, message = "Unavailable For Legal Reasons") => {
    res.status(451).json({
      success: false,
      message,
    });
  };
  
  // how to use this code in express.js
//   const { success, error, unauthorized, notFound } = require("../utils/response");
// // Example Usage in Controller
// if (!user) return notFound(res, "User not found");
// if (!isAuthorized) return unauthorized(res, "Invalid token");
// success(res, "Data fetched successfully", { user });