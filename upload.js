const db = require('./db');
const User = require('./models/User');
const Task = require('./models/Task');
const users = require('./dummy.json');
const tasks = require('./dummy_tasks.json');

async function main(){
    try{
        const conn =  await db()
        tasks.forEach(async (task)=>{
            return await Task.create(task) 
        })
        console.log("tasks created");
    }
    catch(err){
        console.error(err);
    }
    
}

main()