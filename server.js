const express = require('express');
const authRouter = require('./routes/auth.routes.js');
const taskRouter = require('./routes/tasks.routes.js');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');
const cookieParser = require('cookie-parser')
const cors = require('cors');

const app = express()
const PORT = 8000

app.
// add universal middleware
use(express.json()).
use(bodyParser.urlencoded({ extended: false })).
use(cors()).
use(cookieParser()).
// serve front end files
use(express.static(path.join(__dirname+'/client/dist'))).
// routers  
use('/api/tasks',taskRouter).
use('/api/auth', authRouter).
listen(PORT,async ()=>{

  try {
    const conn = await db()
    console.log(`server listening on port ${PORT}`);
  } catch (error) {
    console.error(err);
  }
})
