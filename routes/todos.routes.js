const express =require('express');
const router = express.Router();
const todosRouter = require('../controller/todos.controller');


router.get('/', todosRouter.getTodos);
router.get('/:id', todosRouter.getTodo);
router.post('/', todosRouter.addTodo);
router.patch('/:id', todosRouter.updateTodo);
router.delete('/:id', todosRouter.deleteTodo);

module.exports = router;