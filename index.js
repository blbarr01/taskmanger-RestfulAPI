const express = require('express');
const birds = require('./routes/birds.js');
const tasks = require('./routes/tasks.js');
const bodyParser = require('body-parser');
const db = require('./db.js')
const User = require('./models/User.js')

const app = express()
const PORT = 8000

app.use(bodyParser.json())

// way to use routers as middle wear 
app.use('/birds', birds)
    .use('/tasks',tasks)

app.get('/',(req, res)=>{
    res.send("/made it home!")
})

app.post('/database', async (req,res) =>{
        try {
          const dbcon = await db()
          const data = await User.find({})
          res.status(200)
          .send(data)
        
        
        }catch(error){
          console.error(error);
          res.status(501)
          .send('failed to open db connection')
        }



})

app.listen(8000,()=>{
    console.log(`server listening on port ${PORT}`);
})
