// middleware/helmetMiddleware.js

import helmet from "helmet";

export const helmetMiddleware = helmet({
  contentSecurityPolicy: false, // agar CSP issue aaye toh false karte hai
  crossOriginResourcePolicy: { policy: "cross-origin" },
});
