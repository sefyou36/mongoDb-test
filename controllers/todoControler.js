
const Todo = require('../models/todo')


const createTodo = (req,res)=>{

    const text = req.body.text;
    const todo = new Todo({
      text
    })
    todo.save()
  
  res.json({
    todo:todo
  })
  
  };
  
 const getAllTodo =  async (req, res) => {
   
      const todos = await Todo.find(); 
  
      res.json({
       
        data : {
          todos
        }
      });
   
  };
  
  const getOneTodo = async (req,res) => {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({
      todo : todo
    })
  };
  
  const updateTodo = async (req,res) => {
    const id = req.params.id;
    const updates = req.body;
  
    const updateTodo = await Todo.findByIdAndUpdate(id, updates, {new:true});
    if (!updateTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({
      updateTodo : updateTodo
    })
  };
  
  const deleteTodo = async (req,res) => {
    const id = req.params.id;
    const deleteTodo = await Todo.findByIdAndDelete(id)
    if (!deleteTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json({
      deleteTodo : deleteTodo
    })
  };

  module.exports = {
    createTodo,
    getAllTodo,
    getOneTodo,
    updateTodo,
    deleteTodo
  };