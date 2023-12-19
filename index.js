const express = require('express');
const user = require('./routes/user.js');
const tasks = require('./routes/tasks.js');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');
require('dotenv').config()

const app = express()
const PORT = 8000

app.use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))

// way to use routers as middle wear 
  .use('/api/tasks',tasks)
  .use('/api/users', user)
  //
  .get('/',(req, res)=>{
    let file = path.join(__dirname, "views/index.html")
    res.sendFile(file,(err)=>{
    err ? console.error( ) : console.log('file sent')
    })
    
})

.listen(8000,async ()=>{
    const conn = await db()
    console.log(`server listening on port ${PORT}`);
})
