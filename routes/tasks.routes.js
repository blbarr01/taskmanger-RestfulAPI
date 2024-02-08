const express = require('express');
const router = express.Router()
const verify_token = require('../middleware/auth.middleware.js')
const taskController = require('../controllers/tasks.controller.js')





router.use(verify_token)
//create
.post('/', taskController.createTask )
//read
.get('/', taskController.getTasks)
.get('/:id',(req, res)=>{
    res.send('singular task')
})
//update
.put('/:id',(req,res)=>{
    
})
//delete
.delete('/:id', taskController.deleteTask)

module.exports = router