/**
 * Task Management Server
 * 
 * Express application entry point.
 * 
 * Middleware Pipeline (in order):
 *   1. Request Logger        - logs method, URL, timestamp
 *   2. JSON Body Parser      - parses incoming JSON payloads
 *   3. Content-Type Validator - rejects POST/PUT without application/json
 *   4. Task Routes            - CRUD endpoints at /tasks
 *   5. 404 Handler            - catches undefined routes
 *   6. Global Error Handler   - catches unhandled errors (must be last)
 */
const express = require('express');
const cors = require('cors');
const logger = require('./middleware/logger');
const contentTypeValidator = require('./middleware/contentTypeValidator');
const errorHandler = require('./middleware/errorHandler');
const taskRoutes = require('./routes/tasks');

const app = express();
const PORT = process.env.PORT || 3000;

// ---------- Middleware Pipeline ----------

// 0. Enable CORS
app.use(cors());

// 1. Request logging middleware
app.use(logger);

// 2. Built-in JSON body parser
app.use(express.json());

// 3. Content-Type validation for POST/PUT
app.use(contentTypeValidator);

// ---------- Routes ----------

// 4. Task management endpoints
app.use('/tasks', taskRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Task Management API is running.',
    endpoints: {
      'GET /tasks': 'Retrieve all tasks',
      'POST /tasks': 'Create a new task',
      'PUT /tasks/:id': 'Update a task by ID',
      'DELETE /tasks/:id': 'Delete a task by ID'
    }
  });
});

// ---------- Error Handling ----------

// 5. 404 handler for undefined routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: `Route ${req.method} ${req.url} not found.`
  });
});

// 6. Global error handler (must be the last middleware)
app.use(errorHandler);

// ---------- Start Server ----------

app.listen(PORT, () => {
  console.log(`Task Management Server running at http://localhost:${PORT}`);
});
