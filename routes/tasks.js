const express = require('express');
const router = express.Router()
const {getDate} = require('../custom-date.js')
const verify_token = require('../middleware/auth.js')
const uuid = require('uuid');
const getID = uuid.v4


const valid_users= [1,2]
//create

router.use(verify_token)
.post('/',(req,res)=>{
    res.send(post)
    
})
//read
.get('/',(req, res)=>{
    res.send('all tasks here')
    
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