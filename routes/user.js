const express = require('express')
const router = express.Router()
const db = require('../db.js')
const User = require('../models/User.js')

// define the home page routes
router.get('/', async (req, res) => {
  try {
    const data = await User.find({})
    res.send(data)
    
  } catch (error) {
    res.status(500).send({
      errmsg: "resource not found"
    })
  }
})
.get('/:id', (req, res)=>{console.log('nothing')})

.post('/',(req, res)=>{console.log('nothing')})



module.exports = router