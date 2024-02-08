const express = require('express');
const router = express.Router()
const Task = require('../models/Task.js');
const verify_token = require('../middleware/auth.middleware.js')




router.use(verify_token)
//create
.post('/', async (req,res)=>{
    let user = res.get("x-id")
    res.removeHeader('x-id')
    const task = req.body;
    task['user_id'] = user
    try {
    const status = await Task.create(task)
    console.log(status);
       
    } catch (error) {
        res.send('error').status(500)
        console.error(error);    
        return
    }

    res.status(201)
    .json({
        user,
        msg:'we got your post'
    })
})
//read
.get('/', async (req, res)=>{
    let user = res.get("x-id")
    res.removeHeader('x-id')
    console.log(user);
    let data  = await Task.find().where("user_id").equals(user)
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