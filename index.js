const express = require('express')
const app = express();
const port = 4500;
const cors = require('cors')
require('./config/config')

app.use(cors({
  origin : 'http://localhost:5173'
}));

app.use(express.json());

const todoRouter = require('./routers/router')

app.use('/api', todoRouter)


app.listen(port, () => {
    console.log(`serveur is listening to ${port}...`);
  });
  