/**
 * Content-Type Validation Middleware
 * 
 * Rejects POST and PUT requests that do not include
 * a Content-Type: application/json header.
 */
const contentTypeValidator = (req, res, next) => {
  if (req.method === 'POST' || req.method === 'PUT') {
    const contentType = req.headers['content-type'];
    if (!contentType || !contentType.includes('application/json')) {
      return res.status(415).json({
        success: false,
        error: 'Unsupported Media Type. Content-Type must be application/json.'
      });
    }
  }
  next();
};

module.exports = contentTypeValidator;
