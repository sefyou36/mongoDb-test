const express = require('express');
const Todo = require('./models/todo');
require('./config/config')
const app = express();

app.use(express.json());

const port = 4500;

app.post('/api/v1/todo',(req,res)=>{

  const text = req.body.text;
  const todo = new Todo({
    text
  })
  todo.save()

res.json({
  todo:todo
})

})



app.listen(port, () => {
    console.log(`serveur is listening to ${port}...`);
  });
  