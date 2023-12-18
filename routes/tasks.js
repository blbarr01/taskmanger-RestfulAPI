const express = require('express');
const router = express.Router()
const {getDate} = require('../custom-date.js')
const uuid = require('uuid');
const getID = uuid.v4


const valid_users= [1,2]
//create
router.post('/',(req,res)=>{
    console.log(req.body);
    let user = req.body.user_id;
    if(!valid_users.includes(Number(user))){
        
        res.status(401)
        .send('sorry invalid user')
        .end()
    }
    else{
        res.status(201)
        .json({
            task_id: getID(),
            created: getDate()

        })
        .end()
    }
    
    
})
//read
.get('/',(req, res)=>{
    res.send('all tasks here')
})

.get('/:id',(req, res)=>{
    res.send('all tasks here')
})

//update

.put('/:id',(req,res)=>{
    
})

//delete
.delete('/:id',(req,res)=>{

})

module.exports = router