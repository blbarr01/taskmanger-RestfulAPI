const express = require('express');
const auth = require('./routes/auth.routes.js');
const tasks = require('./routes/tasks.routes.js');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./db.js');
const cookieParser = require('cookie-parser')
const cors = require('cors');

const app = express()
const PORT = 8000

app.
// add universal middleware
use(bodyParser.json()).
use(cors()).
use(cookieParser()).
use(bodyParser.urlencoded({ extended: false })).
// serve front end files
use(express.static(path.join(__dirname+'/client/dist'))).
// routers  
use('/api/tasks',tasks).
use('/api/auth', auth).
listen(8000,async ()=>{

  try {
    const conn = await db()
    console.log(`server listening on port ${PORT}`);
  } catch (error) {
    console.error(err);
  }
})