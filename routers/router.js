const express = require('express')
const { createTodo, getAllTodo, getOneTodo, updateTodo, deleteTodo } = require('../controllers/todoControler');
const router = express.Router();


router.post('/v1/todo', createTodo);
  
router.get('/v1/todo', getAllTodo );
  
router.get('/v1/todo/:id',getOneTodo);
  
router.put('/v1/todo/:id', updateTodo );
  
router.delete('/v1/todo/:id', deleteTodo );

  module.exports = router