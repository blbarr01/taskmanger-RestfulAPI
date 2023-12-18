const express = require('express');
const birds = require('./routes/birds.js');
const tasks = require('./routes/tasks.js');
const bodyParser = require('body-parser');
const db = require('./db.js')

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
          console.log(req.body);
          const dbcon = await db()
          res.send({"connectionStatus": dbcon.connection.readyState })
        }catch(error){
          console.error(error);
          res.status(501)
          .send('failed to open db connection')
        }



})

app.listen(8000,()=>{
    console.log(`server listening on port ${PORT}`);
})
