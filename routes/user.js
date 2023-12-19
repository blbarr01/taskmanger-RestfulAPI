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
.get('/:id', async (req, res) => {
  console.log(req.params.id);
  try {
    const data = await User.findById(req.params.id)
    res.send(data)
    
  } catch (error) {
    res.status(401).send({
      errmsg: "no resource found"
    })
  }

})

.post('/', async (req,res)=>{
  let user = req.body
  try {
    let status = await User.create(user)
    res.status(201)
    .send(status.$set("msg","resource successfully created"))
  } catch (error) {
    console.error(error);
  }
    
})



module.exports = router