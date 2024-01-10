const express = require('express');
const auth = require('./routes/auth.js');
const tasks = require('./routes/tasks.js');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');
const cookieParser = require('cookie-parser')

const app = express()
const PORT = 8000

app.
// add universal middleware
use(bodyParser.json()).
use(cookieParser()).
use(bodyParser.urlencoded({ extended: false })).
// serve front end files
use(express.static(path.join(__dirname+'/client/dist')))
// way to use routers as middle wear 
  .use('/api/tasks',tasks)
  .use('/api/auth', auth)
  .get('/api/test/',(req, res)=>{
    res.json({
      msg: 'were recieving you'
    })
  })
  //
  

  .listen(8000,async ()=>{

    try {
      const conn = await db()
      console.log(`server listening on port ${PORT}`);
    } catch (error) {
      console.error(err);
    }
  })
