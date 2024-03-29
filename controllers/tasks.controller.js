const Task = require('../models/Task.js');

// post
async function createTask (req,res){
    // get user id 
    let user = res.get("x-id")
    res.removeHeader('x-id')

    // append user_id to task body
    const task = req.body;
    task['user_id'] = user
    // 
    try {
        const status = await Task.create(task)
        console.log(status);
    } catch (error) {
        res.send('error').status(500)
        console.error(error);    
        return
    }

    res.status(201).json({
        user,
        msg:'task successfully created'
    })
}

//get
async function getTasks (req, res){
    let user = res.get("x-id")
    res.removeHeader('x-id')
    let user_tasks = await Task.find().where("user_id").equals(user)
    res.json(user_tasks)
}

async function deleteTask(req, res){
    let t_id = req.params.id
    try {
        let status = await Task.findByIdAndDelete(t_id)
        res.status(200).json({
            msg: `successfully deleted task ${status._id} - ${status.title} `
        })
        return
    } catch (error) {
        console.error(error);
        res.status(400).json({
            msg:'sorry we could not delete the resource'
        }) 
    }
   

}

module.exports = {
    createTask,
    deleteTask,
    getTasks
}