const Task = require('../models/Task.js');

// post
async function createTask (req,res){
    // get user id 
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
}

//get
async function getTasks (req, res){
    let user = res.get("x-id")
    res.removeHeader('x-id')
    console.log(user);
    let data  = await Task.find().where("user_id").equals(user)
    res.json(data)
}

async function deleteTask(req, res){
    let t_id = req.params.id
    console.log(t_id);
    let status = await Task.findByIdAndDelete(t_id)
    console.log(status);
    res.json({
        msg: `attempting to delete resource with id ${t_id}`
    })
}

module.exports = {
    createTask,
    deleteTask,
    getTasks
}