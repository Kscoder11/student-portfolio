/**
 * Request Logging Middleware
 * 
 * Logs the HTTP method, request URL, and a UTC timestamp
 * for every incoming request to the server console.
 */
const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  next();
};

module.exports = logger;
