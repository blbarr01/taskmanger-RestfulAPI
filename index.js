const express = require('express');
const user = require('./routes/user.js');
const tasks = require('./routes/tasks.js');
const bodyParser = require('body-parser');
const path = require('path');

const app = express()
const PORT = 8000

app.use(bodyParser.json())

// way to use routers as middle wear 
app.use('/api/tasks',tasks)
.use('/api/users', user)

app.get('/',(req, res)=>{
    let file = path.join(__dirname, "views/index.html")
    res.sendFile(file,(err)=>{
    err ? console.error( ) : console.log('file sent')
    })
    
})


app.listen(8000,()=>{
    console.log(`server listening on port ${PORT}`);
})
