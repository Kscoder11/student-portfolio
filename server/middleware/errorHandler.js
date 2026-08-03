/**
 * Global Error Handling Middleware
 * 
 * Catches any unhandled errors thrown during the request lifecycle
 * and returns a structured JSON 500 response. This must be registered
 * as the last middleware in the Express pipeline.
 */
const errorHandler = (err, req, res, next) => {
  console.error(`[ERROR] ${err.stack || err.message}`);

  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
};

module.exports = errorHandler;
