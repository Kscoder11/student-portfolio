/**
 * Task Controller
 * 
 * Handles CRUD operations for the Task resource.
 * Data is stored in an in-memory array (no database).
 * Each task has: id, title, description, completed, createdAt.
 */

// In-memory data store
let tasks = [
  { id: 1, title: 'Complete Express practical', description: 'Build REST API with CRUD and middleware pipeline.', completed: false, createdAt: new Date().toISOString() },
  { id: 2, title: 'Study React hooks', description: 'Review useState, useEffect, and custom hooks.', completed: true, createdAt: new Date().toISOString() }
];

let nextId = 3;

/**
 * GET /tasks
 * Returns all tasks with a 200 status code.
 */
const getAllTasks = (req, res) => {
  res.status(200).json({
    success: true,
    count: tasks.length,
    data: tasks
  });
};

/**
 * POST /tasks
 * Creates a new task. Expects { title, description } in the request body.
 * Returns the created task with a 201 status code.
 */
const createTask = (req, res, next) => {
  try {
    const { title, description } = req.body;

    if (!title || typeof title !== 'string' || title.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Validation failed. "title" is required and must be a non-empty string.'
      });
    }

    const newTask = {
      id: nextId++,
      title: title.trim(),
      description: (description && typeof description === 'string') ? description.trim() : '',
      completed: false,
      createdAt: new Date().toISOString()
    };

    tasks.push(newTask);

    res.status(201).json({
      success: true,
      data: newTask
    });
  } catch (err) {
    next(err);
  }
};

/**
 * PUT /tasks/:id
 * Updates an existing task by ID. Accepts { title, description, completed }.
 * Returns the updated task with a 200 status code, or 404 if not found.
 */
const updateTask = (req, res, next) => {
  try {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        error: `Task with ID ${id} not found.`
      });
    }

    const { title, description, completed } = req.body;

    if (title !== undefined) tasks[taskIndex].title = title.trim();
    if (description !== undefined) tasks[taskIndex].description = description.trim();
    if (completed !== undefined) tasks[taskIndex].completed = Boolean(completed);

    res.status(200).json({
      success: true,
      data: tasks[taskIndex]
    });
  } catch (err) {
    next(err);
  }
};

/**
 * DELETE /tasks/:id
 * Deletes a task by ID.
 * Returns the deleted task with a 200 status code, or 404 if not found.
 */
const deleteTask = (req, res, next) => {
  try {
    const { id } = req.params;
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex === -1) {
      return res.status(404).json({
        success: false,
        error: `Task with ID ${id} not found.`
      });
    }

    const deletedTask = tasks.splice(taskIndex, 1)[0];

    res.status(200).json({
      success: true,
      data: deletedTask
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllTasks, createTask, updateTask, deleteTask };
