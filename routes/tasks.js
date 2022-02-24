const express = require('express');
const router = express.Router();
const tasks= require('../controllers/tasks')
// comment
router.route('/')
    .get(tasks.getAllTasks)
    .post(tasks.createTask);
router.route('/:id')
    .get(tasks.getTaskById)
    .patch(tasks.updateTask)
    .delete(tasks.deleteTask);

module.exports = router