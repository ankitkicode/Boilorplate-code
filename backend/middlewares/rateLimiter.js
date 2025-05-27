// src/middleware/rateLimiter.js
import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes window
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    message: "Too many requests from this IP, please try again after 15 minutes.",
  },
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable `X-RateLimit-*` headers
});

export const loginLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5, // Only 5 login attempts per 15 min
    message: "Too many login attempts, please try again later."
  });

export const resetPasswordLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 2, // Only 2 reset password attempts per 15 min
    message: "Too many reset password attempts, please try again later."
});
