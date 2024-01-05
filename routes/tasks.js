const express = require('express');
const router = express.Router()
const Task = require('../models/Task.js');
const verify_token = require('../middleware/auth.js')
const uuid = require('uuid');
const getID = uuid.v4



router.use(verify_token)
.post('/',(req,res)=>{
    res.send("post")
    
})
//read
.get('/', async (req, res)=>{
    let user = res.get("x-id")
    res.removeHeader('x-id')
    let data  = await Task.find().where("user_id").equals(user)
    console.log(data);
    res.json(data)
})

.get('/:id',(req, res)=>{
    res.send('singular task')
})

//update

.put('/:id',(req,res)=>{
    
})

//delete
.delete('/:id',(req,res)=>{

})

module.exports = router