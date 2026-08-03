/**
 * Task Routes
 * 
 * Defines the Express Router for all /tasks endpoints.
 * Applies the route-specific validateTaskId middleware
 * to any route that includes the :id parameter.
 */
const express = require('express');
const router = express.Router();
const validateTaskId = require('../middleware/validateTaskId');
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

// GET /tasks - Retrieve all tasks
router.get('/', getAllTasks);

// POST /tasks - Create a new task
router.post('/', createTask);

// PUT /tasks/:id - Update an existing task (with ID validation)
router.put('/:id', validateTaskId, updateTask);

// DELETE /tasks/:id - Delete a task (with ID validation)
router.delete('/:id', validateTaskId, deleteTask);

module.exports = router;
