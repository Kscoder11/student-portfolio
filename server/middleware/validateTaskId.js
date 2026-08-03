/**
 * Task ID Validation Middleware (Route-Specific)
 * 
 * Validates that the :id route parameter is a positive integer
 * before the request reaches the controller.
 */
const validateTaskId = (req, res, next) => {
  const { id } = req.params;
  const parsedId = parseInt(id, 10);

  if (isNaN(parsedId) || parsedId <= 0) {
    return res.status(400).json({
      success: false,
      error: `Invalid task ID "${id}". ID must be a positive integer.`
    });
  }

  req.params.id = parsedId;
  next();
};

module.exports = validateTaskId;
